<template>
  <div class="flex items-start gap-3">
    <!-- アバター -->
    <div class="flex-shrink-0 w-9 h-9 rounded-md bg-kurage-100 flex items-center justify-center overflow-hidden">
      <img v-if="!isUser" src="/kurage-on-white.svg" alt="bot" class="w-7 h-7" />
      <span v-else class="text-base font-bold text-kurage-700">{{ userInitial }}</span>
    </div>

    <div class="flex-1 min-w-0">
      <!-- ユーザー名 + 時刻 -->
      <div class="flex items-baseline gap-2 mb-1">
        <span class="font-bold text-sm text-gray-900">{{ name }}</span>
        <span v-if="botBadge" class="text-[10px] font-bold px-1 py-px rounded bg-gray-200 text-gray-600 leading-none">APP</span>
        <span v-if="time" class="text-xs text-gray-400">{{ time }}</span>
      </div>

      <!-- 本文 -->
      <div class="text-sm text-gray-800 leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  time?: string
  isUser?: boolean
  botBadge?: boolean
}>()

const userInitial = computed(() => props.name.charAt(0).toUpperCase())
</script>
