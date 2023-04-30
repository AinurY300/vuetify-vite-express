<script setup lang="ts">

const response = await fetch('/hello', {
  method: 'POST',
  body: new URLSearchParams({
    text: 'Привет сервер, я фронтенд.'
  }),
})

const data = await response.json()
console.log(data)
</script>

<template>
  
</template>