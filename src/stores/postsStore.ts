import { defineStore } from 'pinia'
import { fetchData } from '@/services/apiService'
import { POSTS_API_URL } from '@/config/apiConfig'
import { Post } from '@/types/Post.d'

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [] as Post[]
  }),
  actions: {
    async fetchPosts() {
      try {
        this.posts = await fetchData<Post[]>(POSTS_API_URL)
      } catch (error) {
        console.error('Ошибка при загрузке постов:', error)
      }
    },

    getPostById(postId: number): Post {
      const post = this.posts.find((post) => post.id === postId)
      if (!post) {
        throw new Error(`Пост с ID ${postId} не найден`)
      }
      return post
    },

    deletePostById(postId: number) {
      this.posts = this.posts.filter((post) => post.id !== postId)
    }
  }
})
