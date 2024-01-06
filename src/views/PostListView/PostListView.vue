<template>
  <div class="post-list-view">
    <BreadcrumbsComponent :breadcrumbs="breadcrumbsData" />
    <div v-if="!isLoading" class="list">
      <div
        v-for="post in postsStore.posts"
        :key="post.id"
        @click="navigateToPostView(post.id)"
        @contextmenu.prevent="deletePost(post.id)"
        class="post-item"
      >
        <p class="post-title"><span>Заголовок поста:</span> {{ post.title }}</p>
        <p class="post-body"><span>Тело поста:</span> {{ post.body }}</p>
      </div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/postsStore'
import { BreadcrumbItem } from '@/types/BreadcrumbItem'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'

const router = useRouter()
const postsStore = usePostsStore()

const isLoading = ref(true)

watchEffect(async () => {
  isLoading.value = true
  await postsStore.fetchPosts()
  isLoading.value = false
})

const breadcrumbsData: BreadcrumbItem[] = [
  { text: 'Главная', path: '/' },
  { text: 'Список постов', path: null }
]

const navigateToPostView = (id: number) => {
  router.push({ name: 'PostView', params: { id } })
}

const deletePost = (id: number) => {
  postsStore.deletePostById(id)
}
</script>

<style scoped lang="scss">
@import './PostListView.module.scss';
</style>
