<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                All Categories
            </h2>
            <div v-for="category in categories" :key="category.id" class="mb-2">


                <div class="max-w-auto px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ category.created_at | formatDate }}</span>
                    </div>

                    <div class="mt-2">
                        <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{{ category.name }}</a>
                        <p class="mt-2 text-gray-600 dark:text-gray-300">{{ category.detail }}</p>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                    </div>
                </div>

            </div>

        </template>

        <div class="py-12">

        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'

export default {
    props:{
        categories: Object
    },
    components: {
        AppLayout,
    },
}
</script>
