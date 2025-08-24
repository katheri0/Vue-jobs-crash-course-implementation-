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
 <div style="height: 200px;">
        <img class="h-12 w-auto" :src="five" alt="Link to Jobs" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;"/>
      </div>
    <!-- Separator -->
    <div class="border-t border-black-200 w-full"></div>
  </div>
</template>
