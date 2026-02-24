<script lang="ts" setup>
import { useChatStore } from '@/store/chat'
import ChatEditor from './components/chatEditor.vue'
import Drawer from './components/drawer.vue'
import Navbar from './components/navbar.vue'

defineOptions({ name: 'Home' })
definePage({
  type: 'home',
  style: {
    // 自定义导航栏
    'navigationStyle': 'custom',
    // 禁用下拉刷新，避免与聊天滚动冲突
    'enablePullDownRefresh': false,
    'backgroundColor': '#F8F8F8',
    // 禁止页面滚动
    'disableScroll': false,
    // 禁止页面缩放
    'app-plus': {
      softInputMode: 'adjustResize',
    },
  },
})

const chatStore = useChatStore()
const messageList = computed(() => chatStore.activeSession?.messages || [])
</script>

<template>
  <view class="index-page page">
    <Navbar />
    <Drawer />
    <view class="flex-1 overflow-hidden px-4">
      <scroll-view>
        <view v-for="msg in messageList" :key="msg.messageId" class="chat-message"
          :class="msg.role === 'user' ? 'user-message' : 'ai-message'">
          <!-- 用户消息 -->
          <view v-if="msg.role === 'user'" class="flex justify-end">
            {{ msg.content }}
          </view>
          <!-- AI消息 -->
          <view v-else class="flex justify-start">
            <up-markdown :content="msg.content" />
          </view>
        </view>
      </scroll-view>
    </view>
    <ChatEditor />
  </view>
</template>

<style lang="scss" scoped>
.index-page {
  display: flex;
  flex-direction: column;

  .chat-message {
    margin: 12px 0;
    line-height: 24px;

    &.user-message {
      background: blue;
      padding: 4px 8px;
      color: #fff;
      border-radius: 6px 0 6px 6px;
    }

    &.ai-message {
      background: #eee;
      border-radius: 0 6px 6px 6px;
    }
  }
}
</style>
