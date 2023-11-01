<script setup lang="ts">
import { ref } from 'vue'
import { useMeasurementsStore } from '@/stores/measurements';

// store
const measurementsStore = useMeasurementsStore()

// local variables
const name = ref('')
const amount = ref('')

function submit() {
  measurementsStore.addMeasurement(name.value, amount.value)
  name.value = ''
  amount.value = ''
}
</script>

<template>
  <div style="position: sticky; width: 0px; heightL 0px; top: 15px; left: 15px;">
    <div class=dialog-container>
      <span class="add-text">Add Measurement</span>
      <input class="input-field" type="text" placeholder="Name" v-model="name">
      <input class="input-field" type="number" min="0" max="40000" placeholder="Length in Feet" v-model="amount">
      <button class="submit-btn" @click="submit">Submit</button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.dialog-container
  width: 200px
  background-color: rgba(0, 0, 0, 0.5)
  position: absolute
  top: 0px
  left: 0px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  padding: 10px
  border-radius: 10px
  border: 1px solid black

.add-text
  color: white
  font-size: 20px
  margin-bottom: 10px
  font-family: 'Roboto', sans-serif

.input-field
  width: 180px
  height: 20px
  border-radius: 5px

.submit-btn
  margin: 5px
  height: 25px
  border-radius: 5px
  border: 1px solid black
  background-color: white
  font-family: 'Roboto', sans-serif
  cursor: pointer
</style>