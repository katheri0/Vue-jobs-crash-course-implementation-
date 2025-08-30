<script setup>
import { onMounted, ref  } from 'vue'
import five from '@/assets/images/5.png';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const roleName = ref("")

onMounted(async () => {
  try {

    await authStore.fetchProfile(); // no arguments needed
    roleName.value = await authStore.fetchRoleName(authStore.user?.role_id)
  } catch (error) {
    console.error('Error fetching user', error);
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-blue-900">
    <div class="border-t border-black-200 w-full m-2"></div>
    <p class="px-4 bg-blue-100 text-blue-900 rounded w-60 flex flex-col items-center justify-center">
      Avatar Pic
    </p>
    <div>
      <img class="h-12 w-auto m-1" :src="five" alt="Avatar"
        style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;" />
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 rounded-full w-full focus:outline-none focus:shadow-outline">
        Edit
      </button>
    </div>
    <div class="bg-blue-500 m-2 py-6 p-4 rounded w-100 h-40">
      <p class="p-1 text-white">name: {{ authStore.user?.name }}</p>
      <p class="p-1">email: {{ authStore.user?.email }}</p>
      <p class="p-1">role: {{ roleName }}</p>
    </div>
    <button
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 m-2 rounded-full w-20 focus:outline-none focus:shadow-outline">
      Logout
    </button>
    <div class="border-t border-black-200 w-full"></div>
  </div>
</template>
