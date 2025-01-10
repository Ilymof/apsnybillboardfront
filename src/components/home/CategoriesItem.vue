<script setup>
defineProps({
    pathCategory: String,
    subcategories: Array
})
</script>

<template>
   <div 
  class=" text-white all-unset perspective-distant p-0 cursor-pointer relative group aspect-square text-lg inline-block">
    <div class="group-hover:rotate-y-180 backface-hidden transform-3d transform absolute duration-500 hyphens-auto z-10 w-full h-full bg-black-299 p-2 rounded-md" lang="ru">
        <slot></slot>
    </div>
    <ul class="p-2.5 flex flex-col gap-2 relative overflow-hidden bg-black-299 group-hover:h-auto group-hover:min-h-full duration-500 group-hover:min-w-full group-hover:z-50 group-hover:rotate-y-360 rotate-y-180 backface-hidden transform-3d z-0  w-full h-full rounded-md" lang="ru">
        <li class="  relative not-last:before:absolute before:w-full before:h-0.25 before:-bottom-1.25 before:left-0 text-sm before:bg-green-400" v-for="(item, index) in subcategories" :key="index">
            <RouterLink :to="'/catalog/' + pathCategory + '/' + item.path"
            class="hover:text-red-400"
            >
            {{ item.subcategoryName }}
        </RouterLink>
    </li>
    </ul>
</div>
</template>
