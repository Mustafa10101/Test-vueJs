<template>
  <div class="home">
    <nav class="home-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <button class="nav-button" @click="navigateToPostListView">Страница списка постов</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPostListView = () => {
  router.push({ name: 'PostListView' })
}
</script>

<style scoped lang="scss">
@import './HomeView.module.scss';
</style>
