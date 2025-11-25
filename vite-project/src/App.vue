<script setup>
import { ref } from 'vue';

const username = ref('');
function Hello() {
  alert(`Your username is ${username.value}`);
}
</script>

<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <input v-model="username"/>
    <button @click="Hello">
      Alert
    </button>
  </div>
</template>

