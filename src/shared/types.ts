export type MessageType = 'fetch'

export interface IMessage {
  type: MessageType
  content?: string
}
