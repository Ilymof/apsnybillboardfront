import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'

export const useFiltersProductsStore = defineStore('filter', () => {
  const filterParams = reactive({
    minPrice: null,
    maxPrice: null,
    region: null,
    categories: null,
    subcategory: null
  })

  const data = ref([])

  const filteredParams = computed(() => {
    return Object.fromEntries(Object.entries(filterParams).filter(([key, value]) => value != null))
  })
  return { filterParams, data, filteredParams }
})
