<template>
  <div>
    <TheNav />
    <NuxtPage />
    <TheFooter />
    <ChatWidget v-if="showChat" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// フォームページではフローティング CTA を非表示（送信ボタンとの被り回避）
const formPaths = ['/beta', '/waitlist', '/free']
const showChat = computed(() => !formPaths.includes(route.path))
</script>
