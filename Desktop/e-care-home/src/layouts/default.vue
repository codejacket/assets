<script lang="ts" setup>
import { systemInfo } from '@/utils/systemInfo'
</script>

<template>
  <view :style="{ height: `${systemInfo.statusBarHeight}px` }" />
  <slot />
</template>
