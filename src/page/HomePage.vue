<script setup>
import Preview from '@/components/home/Preview.vue';
import Advantages from '@/components/home/Advantages.vue'
import CategoriesGrid from '@/components/home/CategoriesGrid.vue';

</script>
<template>
	<Preview class="max-md:hidden " />
	<div class="max-md:block hidden h-[50vh] w-screen bg-black-300"></div>
	<CategoriesGrid />
	<div class="max-md:hidden min-h-20 w-full bg-linear-to-t from-black-300 to-[#202023] "></div>
	<Advantages />
</template>
