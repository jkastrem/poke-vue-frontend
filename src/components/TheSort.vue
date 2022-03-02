<script setup>
import { ref } from 'vue'
import TheButton from './common/TheButton.vue'

const emit = defineEmits(['sort-by-height:down', 'sort-by-height:up'])

const buttonText = ref('Sort by height(down)')

function sortDown() {
  buttonText.value = 'Sort by height(up)'
  emit('sort-by-height:down')
}

function sortUp() {
  buttonText.value = 'Sort by height(down)'
  emit('sort-by-height:up')
}

let isSortedDown = false
function clickSort() {
  isSortedDown = !isSortedDown
  if (isSortedDown) return sortDown
  else return sortUp
}
</script>

<template>
  <TheButton
    :text="buttonText"
    @click="clickSort()()"
  />
</template>
