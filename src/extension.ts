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
        .then(async (uri: vscode.Uri[] | undefined) => {
          if (uri && uri.length > 0) {
            const webview = NextWebviewPanel.getInstance({
              extensionUri: context.extensionUri,
              route: 'view2',
              title: 'GitHub Next Webview 2',
              viewId: 'ghnextB',
            })
          } else {
            vscode.window.showErrorMessage('No valid file selected!')
            return
          }
        })
    })
  )

  // context.subscriptions.push(
  //   hotRequireExportedFn(module, Extension, Extension => new Extension())
  // )
}
