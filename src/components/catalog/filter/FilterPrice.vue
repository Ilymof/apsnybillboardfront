<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { adAPIFilters } from '@/API/adRequest.js'
import { useFiltersProductsStore } from '@/stores/filtersProducts.js'
import { storeToRefs } from 'pinia'

const minPrice = ref(null)
const maxPrice = ref(null)
const isOpen = ref(true)

const { data } = storeToRefs(useFiltersProductsStore())
function APIFilter() {
	const params = useFiltersProductsStore().filterParams
	params.minPrice = minPrice.value > maxPrice.value ? maxPrice.value : minPrice.value;
	params.maxPrice = minPrice.value < maxPrice.value ? maxPrice.value : minPrice.value;
	(async () => {
		try {
			data.value = await adAPIFilters.create()
		} catch (error) {
		}
	})()
}

const stateStyle = computed(() => ({
	arrow: isOpen.value === true ? 'rotate-90' : 'rotate-0',
	border: isOpen.value === true ? 'border-t' : ''
}))
</script>

<template>
	<div class="flex flex-col">
		<div @click="isOpen = !isOpen"
			class="py-3 px-4 w-full  border-y bg-gray-500 border-gray-500 text-white flex gap-x-3 font-semibold text-xl">
			<span :class="[stateStyle.arrow]" class=" duration-500 transition-all inline-block">></span>Цена
		</div>
		<div :class="[stateStyle.border]" v-show="isOpen"
			class="flex justify-center gap-y-4 flex-wrap w-full p-7 bg-gray-700">
			<div class="flex justify-between w-full">
				<input v-model="minPrice" type="number" placeholder="от 2000"
					class=" text-white focus:border w-[47%] px-3 py-2 rounded-lg bg-black-390"></input>
				<input v-model="maxPrice" type="number" placeholder="до 868599"
					class="text-white focus:border w-[47%] px-3 py-2 rounded-lg bg-black-390"></input>
			</div>
			<div @click="APIFilter()"
				class=" cursor-pointer inline-block py-1 px-3 text-base text-white rounded-md  border bg-red">
				Поиск
			</div>
		</div>

	</div>
</template>