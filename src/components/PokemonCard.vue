<script setup>
defineProps({
  name: {
    type: String,
    required: false,
    default: 'undefined pokemon',
  },
  height: {
    type: Number,
    required: false,
    default: 0,
  },
  weight: {
    type: Number,
    required: false,
    default: 0,
  },
  image: {
    type: String,
    required: false,
    default: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/No_image_available_500_x_500.svg',
  },
})
</script>

<template>
  <div class="flex p-6 max-w-fit h-52 m-4 rounded-xl shadow-xl items-center space-x-4">
    <img
      :src="image"
      class="w-2/3 h-2/3"
    >
    <div>
      <h2>{{ name }}</h2>
      <div class="mt-2">
        <p>Height: <span>{{ height }}</span></p>
        <p>Weight: <span>{{ weight }}</span></p>
      </div>
    </div>
  </div>
</template>
