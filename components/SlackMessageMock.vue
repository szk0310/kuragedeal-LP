<template>
  <div class="slack-mock bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden font-sans">
    <!-- Slack ヘッダ風 -->
    <div class="flex items-center gap-2 px-4 py-2 border-b border-gray-100 bg-gray-50">
      <div class="w-2 h-2 rounded-full bg-red-400"></div>
      <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
      <div class="w-2 h-2 rounded-full bg-green-400"></div>
      <span class="ml-2 text-xs text-gray-400 font-medium">{{ channelName }}</span>
    </div>

    <!-- メッセージ本体 -->
    <div class="p-4 space-y-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  channelName?: string
}>()
</script>

<style scoped>
.slack-mock { font-feature-settings: 'palt' 1; }
</style>
