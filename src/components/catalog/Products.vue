<script setup>
import CardProduct from '@/components/ui/card/CardProduct.vue'
import Search from '@/components/ui/icons/Search.vue';
import Sorting from '@/components/catalog/Sorting.vue'
import Filter from '@/components/ui/icons/Filter.vue'
import { adAPIFilters } from '@/API/adRequest.js'
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useFiltersProductsStore } from '@/stores/filtersProducts.js'

const { data } = storeToRefs(useFiltersProductsStore())
onMounted(async () => {
	try {
		data.value = await adAPIFilters.create()
		console.log(data.value);
	} catch (error) {
		console.log(error);
	}
})
const isOpen = defineModel('open')
</script>

<template>
	<div class="flex flex-col gap-y-4">
		<form class=" text-white flex justify-between overflow-hidden bg-black-299 rounded-xl">
			<button class=" flex p-3" type="text">
				<Search class="  max-lg:w-5 h-min w-6" />
			</button>
			<button class="flex text-xl max-md:px-6  px-10 bg-gray-700  items-center" type="submit">Найти</button>
		</form>
		<div class="flex justify-between">
			<Sorting class="inline-block" />
			<div @click="isOpen = !isOpen" class="max-xl:flex hidden gap-x-2 items-center">
				<Filter />
				Фильтры
			</div>
		</div>
		<div class="lining-nums grid max-sm:grid-cols-2 gap-4">
			<CardProduct v-for="(item, index) in data" :key="index" :price="item.price" :title="item.adName"
				:subtitle="item.description" :region="item.region" :photo-url="item.photos" />
		</div>
	</div>
</template>