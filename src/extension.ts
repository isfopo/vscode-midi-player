import * as vscode from 'vscode'
import { getFilename } from './helpers/files'
import { NextWebviewPanel } from './NextWebview'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('Midi.open', () => {
      const openDialogOptions: vscode.OpenDialogOptions = {
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: true,
        filters: {
          MIDI: ['mid', 'midi'],
        },
      }

      vscode.window
        .showOpenDialog(openDialogOptions)
        .then(async (URIs: vscode.Uri[] | undefined) => {
          if (URIs && URIs.length > 0) {
            for (const uri of URIs) {
              NextWebviewPanel.getInstance({
                extensionUri: context.extensionUri,
                fileUri: uri,
                route: 'view1',
                title: getFilename(uri),
                viewId: uri.path,
              })
            }
          }
        })
    })
  )
}
