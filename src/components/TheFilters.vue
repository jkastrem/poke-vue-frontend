<script setup>
import { reactive } from 'vue'
import FormInput from './common/FormInput.vue'

const localState = reactive({
  fromHeight: '',
  toHeight: '',
})

const emit = defineEmits(['updateFilters'])

function updateFilters() {
  emit('updateFilters', {
    fromHeight: localState.fromHeight,
    toHeight: localState.toHeight,
  })
}
</script>

<template>
  <FormInput
    v-model="localState.fromHeight"
    label="From"
    id="from"
    @input="updateFilters"
  />
  <FormInput
    v-model="localState.toHeight"
    label="To"
    id="to"
    @input="updateFilters"
  />
</template>
