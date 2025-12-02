<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../store/posts'

const route = useRoute()
const postId = computed(() => route.params.id)
const post = computed(() => posts.value.find((p) => p.id === postId.value))
</script>

<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.text }}</p>
</template>