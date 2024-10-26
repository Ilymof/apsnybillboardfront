import { APIInstance } from './config'
import { useFiltersProductsStore } from '@/stores/filtersProducts.js'

export const adAPIFilters = {
  async create() {
    try {
      const url = '/ad'
      return await APIInstance(url, {
        method: 'GET',
        params: useFiltersProductsStore().filteredParams
      })
    } catch (error) {}
  }
}
