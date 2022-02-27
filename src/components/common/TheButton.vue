<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Button',
  },
  type: {
    type: String,
    required: false,
    default: 'favorite',
    validator: (value) => ['favorite', 'delete'].includes(value),
  },
})

const typeMapping = new Map()
typeMapping.set('favorite', ['bg-yellow-300', 'hover:bg-yellow-400'])
typeMapping.set('delete', ['bg-red-500', 'hover:bg-red-600'])

const typeClasses = computed(() => {
  return typeMapping.get(props.type)
})
</script>

<template>
  <button
    class="rounded-lg text-sm px-5 py-2.5 m-2 text-center"
    :class="typeClasses"
  >
    {{ text }}
  </button>
</template>
