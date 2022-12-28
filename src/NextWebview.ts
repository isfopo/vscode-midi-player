import * as vscode from 'vscode'
import * as fs from 'fs'
import { Midi } from '@tonejs/midi'
import { IMessage } from './shared/types'
import { getNonce } from './helpers/getNonce'

type NextWebviewOptions = {
  extensionUri: vscode.Uri
  fileUri: vscode.Uri
  route: string
  title: string
  viewId: string
  scriptUri?: vscode.Uri
  styleUri?: vscode.Uri
  nonce?: string
}

abstract class NextWebview {
  protected readonly _opts: Required<NextWebviewOptions>

  public constructor(options: NextWebviewOptions) {
    // fill out the internal configuration with defaults
    this._opts = Object.assign(
      {
        scriptUri: vscode.Uri.joinPath(
          options.extensionUri,
          'out/webviews/index.es.js'
        ),
        styleUri: vscode.Uri.joinPath(
          options.extensionUri,
          'out/webviews/style.css'
        ),
        nonce: getNonce(),
        handleMessage: () => {},
      },
      options
    )
  }

  protected get options(): vscode.WebviewOptions {
    return {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this._opts.extensionUri, 'out'),
        this._opts.fileUri,
      ],
    }
  }

  protected getData(): Midi {
    return new Midi(fs.readFileSync(this._opts.fileUri.fsPath))
  }

  protected _getContent(webview: vscode.Webview) {
    return /* html */ `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
				Use a content security policy to only allow loading images from https or from our extension directory,
				and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${
          webview.cspSource
        } 'self' data:; style-src ${webview.cspSource}; script-src 'nonce-${
      this._opts.nonce
    }';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">

        
				<link href="${webview.asWebviewUri(this._opts.styleUri)}" rel="stylesheet" />
        <script nonce="${this._opts.nonce}">
          window.acquireVsCodeApi = acquireVsCodeApi;
        </script>

				<title>Next Webview</title>
			</head>
			<body>
				<div id="root" data-route="${this._opts.route}"></div>			
				<script nonce="${this._opts.nonce}" src="${webview.asWebviewUri(
      this._opts.scriptUri
    )}"></script>
			</body>
		</html>`
  }

  public abstract update(): void
}

export class NextWebviewPanel extends NextWebview implements vscode.Disposable {
  private static instances: { [id: string]: NextWebviewPanel } = {}

  private readonly panel: vscode.WebviewPanel
  private _disposables: vscode.Disposable[] = []

  // Singleton
  public static getInstance(
    opts: NextWebviewOptions & { column?: vscode.ViewColumn }
  ): NextWebviewPanel {
    const _opts = Object.assign(
      {
        column: vscode.window.activeTextEditor
          ? vscode.window.activeTextEditor.viewColumn
          : undefined,
      },
      opts
    )

    let instance = NextWebviewPanel.instances[_opts.viewId]
    if (instance) {
      // If we already have an instance, use it to show the panel
      instance.panel.reveal(_opts.column)
    } else {
      // Otherwise, create an instance
      instance = new NextWebviewPanel(_opts)
      NextWebviewPanel.instances[_opts.viewId] = instance
    }

    return instance
  }

  private constructor(
    opts: NextWebviewOptions & { column?: vscode.ViewColumn }
  ) {
    // Create the webview panel
    super(opts)
    this.panel = vscode.window.createWebviewPanel(
      opts.route,
      opts.title,
      opts.column || vscode.ViewColumn.One,
      this.options
    )
    // Update the content
    this.update()

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this.panel.onDidDispose(() => this.dispose(), null, this._disposables)

    // Update the content based on view changes
    this.panel.onDidChangeViewState(
      e => {
        console.debug('View state changed! ', this._opts.viewId)
        if (this.panel.visible) {
          this.update()
        }
      },
      null,
      this._disposables
    )

    this.panel.webview.onDidReceiveMessage(
      this.handleMessage,
      this,
      this._disposables
    )
  }

  handleMessage(message: IMessage) {
    switch (message.type) {
      case 'fetch':
        this.panel.webview.postMessage(this.getData())
    }
  }

  // Panel updates may also update the panel title
  // in addition to the webview content.
  public update() {
    this.panel.title = this._opts.title
    this.panel.webview.html = this._getContent(this.panel.webview)
  }

  public dispose() {
    delete NextWebviewPanel.instances[this._opts.viewId]

    this.panel.dispose()
    while (this._disposables.length) {
      const x = this._disposables.pop()
      if (x) {
        x.dispose()
      }
    }
  }
}

export class NextWebviewSidebar
  extends NextWebview
  implements vscode.WebviewViewProvider
{
  private _webview?: vscode.WebviewView

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext<unknown>,
    token: vscode.CancellationToken
  ): void | Thenable<void> {
    // Create the webviewView and configure it
    this._webview = webviewView
    this._webview.webview.options = this.options
    // Set the initial html
    this.update()
    // Handle messages from the webview
    this._webview.webview.onDidReceiveMessage(this.handleMessage, this)
  }

  handleMessage(message: string) {
    console.log(message)
  }

  // WebviewView updates are just "write the html to the view"
  update() {
    if (this._webview) {
      this._webview.webview.html = this._getContent(this._webview.webview)
    }
  }
}
