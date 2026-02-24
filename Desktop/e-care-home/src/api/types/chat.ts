export interface Session {
  sessionId: string
  sessionTitle: string
  lastTime: number
  isTop: boolean
}

export interface Message {
  messageId: string
  sessionId: string
  role: 'user' | 'assistant'
  content: string
  createTime: number
}

export interface SessionDetail extends Session {
  messages: Message[]
}
