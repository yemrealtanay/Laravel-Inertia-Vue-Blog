<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                My Posts
            </h2>

            <div v-for="post in posts" :key="post.id" class="mb-2">


                <div class="max-w-auto px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ post.created_at | formatDate }}</span>
                        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{{ post.category.name }}</a>
                    </div>

                    <div class="mt-2">
                        <a :href="route('posts.show', post)" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{{ post.title }}</a>
                        <p class="mt-2 text-gray-600 dark:text-gray-300">{{ post.summary }}</p>
                    </div>

                    <div class="flex items-start justify-between mt-4">
                        <a :href="route('posts.show', post)" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                        <div class="flex items-center">
                            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{{ post.user.name }}</a>
                        </div>

                    </div>
                    <div class="flex m-4 justify-start">

                        <a :href="route('posts.edit', post)" class="btn px-4 py-2 m-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-200 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                            Edit
                        </a>

                        <button @click="destroy(post.id)" class="btn px-4 py-2 m-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-200 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                            Delete
                        </button>

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
    props: {
        posts: Object,
    },
    components: {
        AppLayout,
    },
    methods:{
        destroy(id){
            this.$inertia.delete(route("posts.destroy", id));
        }
    }
}
</script>
