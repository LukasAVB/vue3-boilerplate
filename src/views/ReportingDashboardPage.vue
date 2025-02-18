<!-- src/views/ReportingDashboard.vue -->
<template>
  <div class="flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-3xl bg-gray-002 shadow-lg rounded-2xl p-6">
      <h1 class="text-2xl font-bold mb-4">MVS Reporting Dashboard</h1>

      <!-- Date Range Selection -->
      <DateSelector />

      <!-- Loading State -->
      <div v-if="loading" class="text-center text-gray-500">Loading...</div>

      <!-- Stats Cards -->
      <div v-else class="grid grid-cols-2 gap-6">
        <StatsCard title="Total Users" :value="stats.users" />
        <StatsCard title="Total Sessions" :value="stats.sessions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useStatsStore } from "@/stores"
import {
  StatsCard,
  DateSelector
} from '@/components'

// Store
const {
  fetchStats
} = useStatsStore()

const {
  stats,
  loading,
} = storeToRefs(useStatsStore())
</script>
