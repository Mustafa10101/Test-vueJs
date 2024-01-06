<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumbs-item"
        @click="navigateTo(crumb.path)"
      >
        {{ crumb.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { BreadcrumbItem } from '@/types/BreadcrumbItem'

defineProps<{
  breadcrumbs: BreadcrumbItem[]
}>()

const router = useRouter()

const navigateTo = (path: string | null) => {
  if (path) {
    router.push(path)
  }
}
</script>

<style scoped lang="scss">
@import './BreadcrumbsComponent.module.scss';
</style>
