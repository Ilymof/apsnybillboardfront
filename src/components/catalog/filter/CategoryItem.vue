<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
	category: String,
	subcategory: Array
})
const isOpen = ref(false)

const stateStyle = computed(() => ({
	arrow: isOpen.value === true ? 'rotate-90' : 'rotate-0',
}))
</script>

<template>
	<li @click="isOpen = !isOpen" :class="[subcategory.length !== 0 ? 'cursor-pointer' : '']"
		class="w-full flex self-center text-white bg-gray-500 font-semibold text-base  px-4 py-3">
	<li class="select-none flex gap-x-3">
		<span :class="[stateStyle.arrow, subcategory.length === 0 ? 'hidden' : 'inline-block']"
			class="duration-300 inline-block">></span>
		{{ category }}
	</li>
	</li>
	<Transition>
		<ul v-show="isOpen" v-if="subcategory" class="cursor-pointer">
			<li v-for="item in subcategory" :class="[stateStyle.border]"
				class="border-t-[1px] w-full flex self-center text-white bg-gray-800 font-semibold text-base  px-4 py-3">
				{{ item.subcategoryName }}
			</li>
		</ul>
	</Transition>
</template>

<style scoped>
.v-enter-active {
	transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>