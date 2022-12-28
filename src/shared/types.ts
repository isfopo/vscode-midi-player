export type MessageType = 'request'

export interface IMessage {
  type: MessageType
  content?: string
}
