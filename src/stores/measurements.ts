import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useMeasurementsStore = defineStore('measurements', () => {
  const measurements: Ref<any[]> = ref([])
  function addMeasurement(name: String, amount: String) {
    measurements.value.push({ 'name': name, 'amount': amount })
  }
  return { measurements, addMeasurement }
})
