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
    default: 'default',
    validator: (value) => [
      'default',
      'favorite',
      'delete',
    ].includes(value),
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const typeMapping = new Map()
typeMapping.set('default', 'default-btn')
typeMapping.set('favorite',  'favorite-btn')
typeMapping.set('delete', 'delete-btn ')

const typeClasses = computed(() => {
  return typeMapping.get(props.type)
})
</script>

<template>
  <button
    class="rounded-lg text-sm px-5 py-2.5 m-2 text-center"
    :class="typeClasses"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<style lang="postcss">
.default-btn {
  @apply text-white bg-blue-700 hover:bg-blue-800 disabled:bg-blue-100 disabled:text-gray-500
}

.favorite-btn {
  @apply bg-yellow-300 hover:bg-yellow-400 disabled:bg-yellow-100 disabled:text-gray-500
}

.delete-btn {
  @apply bg-red-500 hover:bg-red-600 disabled:bg-red-100 disabled:text-gray-500
}
</style>
