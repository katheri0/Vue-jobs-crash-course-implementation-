<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  email: '',
  password: ''
})

async function onLogin() {
  try {
    const user = await authStore.login(form.value.email, form.value.password);
    console.log("Logged in:", user);
    router.push({ name: 'main' });    
  } catch (error) {
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <div class=" flex flex-col items-center justify-center  bg-gray-900">
    <form @submit.prevent="onLogin">
      <div class="bg-blue-900 text-white rounded-lg shadow-lg p-8 w-[20rem] flex flex-col items-center">
        <h4 class="text-center text-xl font-semibold mb-4">سعيدون برؤيتك مرة أخرى</h4>

        <!-- Google Button -->
        <button
          class="flex items-center justify-center border border-blue-200 rounded-md w-full h-12 hover:bg-blue-200 hover:text-black transition mb-4">
          <img src="/src/assets/images/icons8-google 1.svg" class="w-5 h-5 mr-2" />
          <span class="text-sm">سجل باستخدام جوجل</span>
        </button>

        <p class="text-center text-sm text-gray-400 mb-4">أو</p>

        <!-- Inputs -->
        <input v-model="form.email" type="email" placeholder="...قم بإدخال إيميلك الخاص"
          class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3" />

        <input v-model="form.password" type="password" placeholder="...قم بإدخال كلمة السر"
          class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3" />

        <p class="text-right text-xs text-gray-400 w-full mb-4">
          إذا قمت بنسيان كلمة السر انقر <a href="#" class="text-blue-400 hover:underline">هنا</a>
        </p>

        <!-- Next Button -->
        <button type="submit"
          class="bg-gray-200 text-black font-semibold py-2 px-6 rounded-full hover:bg-blue-300 transition w-full">
          التالي
        </button>
      </div>
    </form>

    <!-- Separator -->
    <div class="border-t border-black-200 w-full"></div>
  </div>
</template>
