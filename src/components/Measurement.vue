<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  measurement: {
    type: Number,
    required: true
  }
});

let pixelMeasurement = computed(() => {
  return Math.floor(Number(props.measurement) * 1152)
})

</script>

<template>
  <div class="measurement-container" :style="{ 'top': pixelMeasurement + 'px' }">
    <div class="info-container">
      <div class="name">{{ name }}</div>
      <div>{{ measurement }} feet</div>
      <div>{{ pixelMeasurement }} pixels</div>
    </div>
    <div class="mark">
    </div>
  </div>
</template>

<style scoped lang="sass">

.name
  font-size: 20px

.measurement-container
  position: absolute
  right: 0px
  top: 10px
  display: flex
  flex-direction: row
  color: white

.info-container
  display: flex
  flex-direction: column
  background-color: rgba(0, 0, 0, 0.5)
  border: 1px solid white
  border-radius: 5px
  padding: 5px

.mark
  width: 20px
  height: 5px
  background-color: black
  border-radius: 2px
  margin-left: 5px
  opacity: 0.6
  border: 1px solid white
</style>