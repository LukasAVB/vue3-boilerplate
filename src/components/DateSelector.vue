<template>
  <div class="w-full flex flex-col items-center gap-4 mb-6">
    <div class="w-full flex">
      <label for="dateRange">Select Date Range:</label>
      <select 
        v-model="selectedRange" 
        class="p-2 rounded-xl bg-white shadow-lg"
        @change="handleDateRangeChange"
      >
        <option v-for="(range, key) in dateRanges" :key="key" :value="key">
          {{ range.label }}
        </option>
        <option value="custom">Custom Date Range</option>
      </select>
    </div>
    <div v-if="selectedRange === 'custom'" class="w-full grid grid-cols-3 gap-4">
      <div class="flex flex-col gap-4">
        <label class="col-span-3">Date From:</label>
        <input 
          type="date" 
          v-model="customFrom" 
          :max="today"
          class="p-2 border rounded-lg bg-white shadow-lg h-[40px]" 
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="col-span-3">Date To:</label>
        <input 
          type="date" 
          v-model="customTo" 
          :max="today"
          class="p-2 border rounded-lg bg-white shadow-lg h-[40px]" 
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="col-span-3">&nbsp;</label>
        <button 
          class="text-white p-2 rounded-lg shadow-md h-[40px]"
          :class="{
            'bg-black': isCustomValid,
            'bg-gray-005 pointer-events-none': !isCustomValid
          }"
          @click="submitCustomRange" 
        >
          {{ customButtomLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { storeToRefs } from "pinia"
import { useStatsStore } from "@/stores"

// Store
const {
  fetchStats
} = useStatsStore()

const {
  dateRanges
} = storeToRefs(useStatsStore())

// Variable
const selectedRange = ref('last_30_days')
const customFrom = ref('')
const customTo = ref('')

// Computed
const today = computed(() => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return now.toISOString().split("T")[0]
});


const isCustomValid = computed(() => {
  return !!customFrom.value && !!customTo.value
})

const customButtomLabel = computed(() => {
  return !!isCustomValid.value 
    ? 'Apply Custom Range'
    : 'Set Dates to Apply'
})

// Event Handlers
const handleDateRangeChange = () => {
  if (selectedRange.value !== "custom") {
    customFrom.value = ''
    customTo.value = ''
    const range = dateRanges.value[selectedRange.value]
    fetchStats(range.from, range.to)
  }
}

const submitCustomRange = () => {
  if (!customFrom.value || !customTo.value) {
    alert("Please select both start and end dates.")
    return
  }
  fetchStats(customFrom.value, customTo.value)
}

// Life Cycle Hooks
onMounted(() => {
  handleDateRangeChange()
})
</script>
