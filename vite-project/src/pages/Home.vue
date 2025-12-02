<script setup>
import { ref } from 'vue'
import { posts, addPost } from '../store/posts'

const title = ref('')
const text = ref('')

function addPostAndRead() {
  addPost(title.value, text.value)
  title.value = ''
  text.value = ''
}
</script>

<template>
  <h1>Home</h1>

  <fieldset>
    <legend>Add Post</legend>

    <input type="text" v-model="title" /><br />
    <textarea v-model="text"></textarea><br />
    <input type="file" @change="onImageSelect">
    <button @click="addPostAndRead()">Add Post</button>
  </fieldset>

  <div v-for="post in posts">
    <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    <img v-if="post.image" :src="post.image" style="max-width: 200px;">
    <small>{{ formatTime(post.createdAt) }}</small>
  </div>
</template>