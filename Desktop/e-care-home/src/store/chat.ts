import type { Session, SessionDetail } from '@/api/types/chat'
import { defineStore } from 'pinia'
import chatApi from '@/api/chat'
import { parseTime } from '@/utils/index'

const pinText = '置顶'

export const useChatStore = defineStore('chat', () => {
  const sessionList = ref<Session[]>([])
  const activeSession = ref<SessionDetail>()

  const sessionListByLabel = computed(() => {
    return sessionList.value.sort((a, b) => a.lastTime - b.lastTime).reduce((acc, ses) => {
      const label = getSessionLabel(ses)
      if (acc[label]) {
        acc[label].push(ses)
      } else {
        acc[label] = [ses]
      }
      return acc
    }, {
      [pinText]: [],
    } as Record<string, Session[]>)
  })

  async function init() {
    await getSessionList()
    await getSessionDetail(activeSession.value?.sessionId || sessionList.value[0]?.sessionId)
  }

  async function delSession(sessionIds: string[]) {
    await chatApi.delSession(sessionIds)
    await chatApi.getSessionList()
    if (sessionIds.includes(activeSession.value?.sessionId)) {
      await getSessionDetail(sessionList.value[0]?.sessionId)
    }
  }

  async function updateSession({ sessionId, sessionTitle, isTop }) {
    await chatApi.updateSession({ sessionId, sessionTitle, isTop })
    await chatApi.getSessionList()
  }

  async function getSessionList() {
    const { data } = await chatApi.getSessionList()
    sessionList.value = data
  }

  async function getSessionDetail(sessionId: string) {
    if (sessionId) {
      const { data } = await chatApi.getSessionDetail(sessionId)
      activeSession.value = data
    }
  }

  return {
    sessionList,
    activeSession,
    sessionListByLabel,
    init,
    updateSession,
    delSession,
    getSessionList,
    getSessionDetail,
  }
})

function getSessionLabel(session: Session) {
  if (session.isTop) {
    return pinText
  } else {
    return parseTime(session.lastTime, '{y}年{m}月')
  }
}
