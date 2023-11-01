<script setup lang="ts">
import Foot from '@/components/Foot.vue'
import AddMeasurementDialog from '@/components/AddMeasurementDialog.vue'
import Measurement from '@/components/Measurement.vue'
import { useMeasurementsStore } from '@/stores/measurements'

// stores
let measurementsStore = useMeasurementsStore()

// local variables
let feets: any[] = []
const defaultMeasurements: any[] = [
  { name: 'Levi', 'amount': '1.58' },
  { name: 'Shaq', 'amount': '7.1' },
  { name: 'Blue Whale', 'amount': '77' },
  { name: 'Empire State Building', 'amount': '1250' },
  { name: 'Burj Khalifa', 'amount': '2716.5' },
  { name: 'Average Ocean Depth', 'amount': '12100' },
  { name: 'Max Feet in a Website', 'amount': '23301' },
]

function generateFeet(number: number) {
  for (let i = 1; i < number + 1; i++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    feets.push({ footNumber: i.toString(), backgroundColor: '#' + randomColor })
  }
}

generateFeet(23302)

</script>

<template>
  <main>
    <AddMeasurementDialog></AddMeasurementDialog>
    <Foot v-for="feet in feets" :footNumber="feet.footNumber" :backgroundColor="feet.backgroundColor"></Foot>
    <Measurement v-for="measurement in measurementsStore.measurements" :name="measurement.name"
      :measurement="measurement.amount"></Measurement>
    <Measurement v-for="measurement in defaultMeasurements" :name="measurement.name" :measurement="measurement.amount">
    </Measurement>
  </main>
</template>

<style scoped lang="sass"></style>
