<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  footNumber: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true
  }
});

const unit = props.footNumber == "1" ? 'Foot' : 'Feet';

</script>

<template>
  <div class="foot-container" :style="{ 'background-color': backgroundColor }">
    <div class="text-bg">
      <h1 class="foot-text">{{ footNumber }} {{ unit }}</h1>
    </div>
  </div>
</template>

<style scoped lang="sass">
.foot-container
  width: 100%
  height: 1152px
  display: flex
  align-items: center 
  justify-content: center

.foot-text
  color: white

.text-bg
  display: flex
  align-items: center 
  justify-content: center
  height: 40px
  background-color: rgba(0, 0, 0, 0.5)
  padding: 15px
  border-radius: 5px
</style>