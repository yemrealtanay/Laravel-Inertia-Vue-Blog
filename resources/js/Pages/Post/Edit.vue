<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Edit Postingok
      </h2>

      <section
        class="
          w-full
          max-w-2xl
          px-6
          py-4
          mx-auto
          bg-white
          rounded-md
          shadow-md
          dark:bg-gray-800
        "
      >
        <form @submit.prevent="update()">
        <div class="mt-6">
            <div class="items-center mx-2 md:flex">

                <div class="w-full mx-2">
                    <label for="category_id">Select Category: </label>
                    <select name="category_id" v-model="form.category_id">
                        <option v-for="category in categories" :key="category.id" :value="category.id" v-text="category.name"></option>
                    </select>
                </div>
            </div>
        </div>

        <div class="mt-4">
                  <label for="title">Title: </label>
                  <input
                    type="text"
                    id="title"
                    v-model="form.title"
                    class="
                      w-full
                      px-4
                      py-2
                      mt-2
                      border
                      rounded-md
                      focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>

                <div class="mt-4">
                  <label for="content">Content: </label>
                  <textarea
                    id="content"
                    type="text"
                    v-model="form.content"
                    class="
                      w-full
                      px-4
                      py-2
                      mt-2
                      border
                      rounded-md
                      focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  ></textarea>
                </div>

                <div class="flex items-center mt-4">
                  <button
                    type="submit"
                    class="px-6 py-7 text-white bg-gray-900 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
      </section>
    </template>

    <div class="py-12"></div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
  props:{
      categories: Object,
      post: Object,
},
  data(props) {
    return {
      form: {
        title: props.post.title,
        content: props.post.content,
        category_id: props.post.category_id,
      },
    };
  },
  components: {
    AppLayout,
  },
  methods: {
    update() {
       this.$inertia.patch(`/posts/${this.post.id}`, this.form);
    },
  },
};
</script>
