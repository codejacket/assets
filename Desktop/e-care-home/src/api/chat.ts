import type { SessionDetail } from '@/api/types/chat'

export default {
  async uploadChatFile(filePath: string) {
    return {
      data: {
        url: filePath,
        id: '1',
      },
    }
  },
  async getSessionList() {
    return {
      data: [{
        sessionId: '1',
        sessionTitle: '测试会话1',
        lastTime: 1771434059525,
        isTop: false,
      }, {
        sessionId: '2',
        sessionTitle: '测试会话2',
        lastTime: 1771434059525,
        isTop: true,
      }, {
        sessionId: '3',
        sessionTitle: '测试会话3',
        lastTime: 1771434059525,
        isTop: false,
      }, {
        sessionId: '4',
        sessionTitle: '测试会话4',
        lastTime: 1771434059525,
        isTop: false,
      }, {
        sessionId: '5',
        sessionTitle: '测试会话5',
        lastTime: 1771434059525,
        isTop: true,
      }],
    }
  },
  async updateSession({ sessionId, sessionTitle, isTop }) {
    return {}
  },
  async delSession(sessionIds: string[]) {
    return {}
  },
  async getSessionDetail(sessionId: string) {
    return {
      data: {
        sessionId: '1',
        sessionTitle: '测试会话1',
        lastTime: 1771434059525,
        isTop: true,
        messages: [{
          messageId: '1',
          sessionId: '1',
          role: 'user',
          content: '一切发生必有恩典是什么意思？',
          createTime: 1771434059525,
        }, {
          messageId: '2',
          sessionId: '1',
          role: 'assistant',
          content: '“一切发生必有恩典”这句话表达了一种积极的人生态度和信仰观念。它意味着，无论生活中遇到什么困难、挫折或挑战，都相信这些经历背后都有其积极的意义和价值。这种信念鼓励人们在面对逆境时保持希望和坚韧，相信困难最终会带来成长、学习或意想不到的祝福。\n\n从心理学角度来看，这种观念有助于增强个人的心理韧性，帮助人们更好地应对压力和挑战。它提醒我们，即使在最艰难的时刻，也要寻找其中的积极因素，从中汲取力量和智慧。\n\n需要注意的是，这种信念并不意味着对所有困难的忽视或否认，而是强调在困境中寻找意义和成长的机会。',
          createTime: 1771434059525,
        }, {
          messageId: '3',
          sessionId: '1',
          role: 'user',
          content: '什么是恩典？',
          createTime: 1771434059525,
        }, {
          messageId: '4',
          sessionId: '1',
          role: 'assistant',
          content: '在宗教和哲学语境中，“恩典”通常指一种超自然的赐予或祝福，是神或宇宙给予人类的无偿恩惠。它不是通过努力或行为获得的，而是出于某种慈悲、爱或神圣的意图。\n\n在基督教神学中，恩典是上帝无条件地赐给人类的礼物，使人能够与神和好，并获得救赎。它被视为一种神圣的恩赐，不依赖于人的功德或行为，而是基于神的慈爱和怜悯。\n\n在更广泛的意义上，“恩典”也可以指生活中的美好事物、幸运的遭遇或他人的善意与帮助。它体现了人与人之间的情感连接和相互支持。\n\n总的来说，恩典是一种超越理性理解的、来自更高力量的馈赠，它能带来内心的平静、希望和力量。',
          createTime: 1771434059525,
        }],
      } as SessionDetail,
    }
  },
}
