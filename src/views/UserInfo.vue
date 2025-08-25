<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
import api from '@/services/api';
import { useRouter } from 'vue-router';
import five from '@/assets/images/5.png';
const router = useRouter();
// const router = useRouter();




</script>

<template>
  <div class=" flex flex-col items-center justify-center  bg-blue-900">
 <div >
          <p class="px-4">Avatar Pic</p>
        <img class="h-12 w-auto m-1" :src="five" alt="Link to Jobs" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;"/>
        <button  class="bg-blue-700  hover:bg-blue-600 text-white font-bold py-1  rounded-full w-full focus:outline-none focus:shadow-outline">Edit</button>
      </div>
      <div class="bg-blue-500  m-2 py-6 p-4 rounded w-100 h-40">
        <p class="p-1">name: Alice Johnson</p>
        <p class="p-1">email:alice@example.com</p>
        <p class="p-1">role: seeker </p>
      </div>
      <button  class="bg-red-700  hover:bg-blue-600 text-white font-bold py-1 px-2 m-2 rounded-full w-20 focus:outline-none focus:shadow-outline">Logout</button>
    <!-- Separator -->
    <div class="border-t border-black-200 w-full"></div>
  </div>
</template>
