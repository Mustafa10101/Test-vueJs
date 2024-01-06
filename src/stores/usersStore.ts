import { defineStore } from 'pinia'
import { fetchData } from '@/services/apiService'
import { USERS_API_URL } from '@/config/apiConfig'
import { User } from '@/types/User'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: [] as User[]
  }),

  actions: {
    async fetchUsers() {
      try {
        this.users = await fetchData<User[]>(USERS_API_URL)
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error)
      }
    },

    getUserById(userId: number): User {
      const user = this.users.find((user) => user.id === userId)
      if (!user) {
        throw new Error(`Пользователь с ID ${userId} не найден`)
      }
      return user
    }
  }
})
