// import {
//   enableHotReload,
//   hotRequireExportedFn,
//   registerUpdateReconciler,
// } from '@hediet/node-reload'
// import { Disposable } from '@hediet/std/disposable'
import * as vscode from 'vscode'
// import MyWebview from './MyWebview'
import { NextWebviewPanel } from './NextWebview'

// if (process.env.NODE_ENV === 'development') {
//   enableHotReload({ entryModule: module })
// }
// registerUpdateReconciler(module)

// export class Extension {
//   public readonly dispose = Disposable.fn()

//   constructor() {
//     super()

//     // Disposables are disposed automatically on reload.
//     const item = this.dispose.track(vscode.window.createStatusBarItem())
//     item.text = 'Hallo Welt'
//     item.show()
//   }
// }

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('Midi.open', () => {
      let openDialogOptions: vscode.OpenDialogOptions = {
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        filters: {
          MIDI: ['mid', 'midi'],
        },
      }

      vscode.window
        .showOpenDialog(openDialogOptions)
        .then(async (URIs: vscode.Uri[] | undefined) => {
          if (URIs && URIs.length > 0) {
            for (const uri of URIs) {
              const webview = NextWebviewPanel.getInstance({
                extensionUri: context.extensionUri,
                fileUri: uri,
                route: 'view1',
                title: 'GitHub Next Webview 1',
                viewId: 'ghnextB',
              })
            }
          }
        })
    })
  )

  // context.subscriptions.push(
  //   hotRequireExportedFn(module, Extension, Extension => new Extension())
  // )
}
