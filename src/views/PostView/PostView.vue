<template>
  <div class="post-view">
    <BreadcrumbsComponent :breadcrumbs="breadcrumbsData" />
    <div v-if="!isLoading" class="post-details">
      <p class="post-title"><span>Заголовок поста:</span> {{ selectedPost.title }}</p>
      <p class="post-body"><span>Тело поста:</span> {{ selectedPost.body }}</p>
      <div class="author" v-if="selectedPost && user">
        <h3>Об авторе:</h3>
        <p>Имя: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Телефон: {{ user.phone }}</p>
        <p>Website: {{ user.website }}</p>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/postsStore'
import { useUsersStore } from '@/stores/usersStore'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'

const postsStore = usePostsStore()
const usersStore = useUsersStore()
const route = useRoute()

const isLoading = ref(true)

watch(() => route.params.id, loadData, { immediate: true })

async function loadData() {
  isLoading.value = true
  await postsStore.fetchPosts()
  await usersStore.fetchUsers()
  isLoading.value = false
}

const selectedPost = computed(() => {
  return postsStore.getPostById(Number(route.params.id))
})

const user = computed(() => {
  return usersStore.getUserById(selectedPost.value.userId)
})

const breadcrumbsData = computed(() => [
  { text: 'Главная', path: '/' },
  { text: 'Список постов', path: '/PostList' },
  { text: `Пост №${route.params.id}`, path: null }
])
</script>

<style scoped lang="scss">
@import './PostView.module.scss';
</style>
