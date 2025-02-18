// src/stores/useStatsStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStatsStore = defineStore("stats", {
  state: () => ({
    stats: { users: 0, sessions: 0 },
    loading: false,
  }),

  getters: {
    dateRanges: () => {
      const today = new Date();
      const formatDate = (date) => date.toISOString().split("T")[0];

      return {
        last_30_days: {
          label: "Last 30 Days",
          from: formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30)),
          to: formatDate(new Date()),
        },
        last_7_days: {
          label: "Last 7 Days",
          from: formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)),
          to: formatDate(new Date()),
        },
        yesterday: {
          label: "Yesterday",
          from: formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)),
          to: formatDate(new Date()),
        },
        today: {
          label: "Today",
          from: formatDate(new Date()),
          to: formatDate(new Date()),
        },
      }
    },
  },

  actions: {
    async fetchStats(dateFrom, dateTo) {
      try {
        this.loading = true;
        const response = await fetch(
          `${import.meta.env.VITE_USER_SESSIONS_API_URL}?date_from=${dateFrom}&date_to=${dateTo}`
        );
        const { data } = await response.json();
        this.stats = {
          users: data.total_unique_users || 0,
          sessions: data.total_unique_sessions || 0,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
