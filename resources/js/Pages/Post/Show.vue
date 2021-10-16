<template>
    <app-layout>
        <template #header>
            <h1 class="font-bold text-xl text-gray-800 leading-tight">
                {{post.title}}
            </h1>

            <h3 class="font-semibold">{{ post.summary }}</h3>
            <p class="text-gray-500">{{ post.content }}</p>

        </template>

        <div class="py-12">

        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'


export default {
    props: {
        post: Object,
    },
    components: {
        AppLayout,
    },
}
</script>
