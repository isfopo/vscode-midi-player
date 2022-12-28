import * as vscode from 'vscode'

export const getFilename = (uri: vscode.Uri): string => {
  return uri.path.split('/').slice(-1)[0]
}
