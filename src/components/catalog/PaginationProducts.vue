<script setup>
import { useFiltersProductsStore } from '@/stores/filtersProducts.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentPage = useFiltersProductsStore().filterParams
const totalPages = useFiltersProductsStore().totalPages
const paramsActive = useFiltersProductsStore().filteredParams

// Переход на предыдущую страницу
const prevPage = () => {
  if (currentPage.page > 1) {
    currentPage.page--
    useFiltersProductsStore().requestAd() // Загрузка данных для предыдущей страницы
    router.push({
      query: paramsActive
    })
  }
}

const nextPage = () => {
  if (currentPage.page < totalPages) {
    currentPage.page++
    useFiltersProductsStore().requestAd() // Загрузка данных для следующей страницы
    router.push({
      query: paramsActive
    })
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.page = page
    useFiltersProductsStore().requestAd() // Загрузка данных для указанной страницы
    router.push({
      query: paramsActive
    })
  }
}

// Генерация видимых кнопок пагинации
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5 // Количество отображаемых кнопок
  const start = Math.max(1, currentPage.page - Math.floor(maxVisible / 2))
  const end = Math.min(totalPages, start + maxVisible - 1)
  console.log('totalPages', totalPages)

  // Добавляем первую страницу, если нужно
  // if (start > 1) pages.push(1)
  // if (start > 2) pages.push('...') // Указываем пропуск страниц

  // Основной диапазон
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  // Добавляем последнюю страницу, если нужно
  if (end < totalPages - 1) pages.push('...')
  if (end < totalPages) pages.push(totalPages)

  return pages
})
</script>

<template>
  <div class="flex gap-x-3 -translate-x-1/2 justify-self-end items-start text-white">
    <button class="hover:text-green-300 duration-200" @click="prevPage()">назад</button>
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="page !== '...' && goToPage(page)"
      :disabled="page === '...'"
      :class="{
        'text-green-400 font-bold': currentPage.page === page,
        '': currentPage.page !== page,
        'cursor-not-allowed': page === '...'
      }"
      class="hover:text-green-300 duration-200"
    >
      {{ page }}
    </button>
    <button class="hover:text-green-300 duration-200" @click="nextPage()">вперёд</button>
  </div>
</template>
