<script setup>
import { inject, reactive, ref } from 'vue';
import api from '@/services/api';
import { useRouter } from 'vue-router';
const router = useRouter();

const form = reactive({
  name: '',
  email: '',
  password: '',
});


const submitRegistration = async () => {
  try {
    await api.post("/users", { ...form });
    router.push({ name: 'jobs' });
    showLogin.value = true;
  } catch (error) {
    console.error("Registration failed:", error);
  }
  if (!form.email.includes("@")) {
    errorMessage.value = "Invalid email format";
    return;
  }
  if (form.password !== form.password_confirmation) {
    errorMessage.value = "Passwords do not match";
    return;
  }
};


</script>
<template>
  <form
    @submit.prevent="submitRegistration"
    class="bg-blue-900 text-white rounded-lg  p-8 max-w-sm mx-auto"
  >
    <h4 class="text-center text-xl font-semibold mb-6">!انضم إلينا اليوم واستمتع بتجربة فريدة</h4>

    <input
      v-model="form.name"
      type="text"
      placeholder="الاسم"
      class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
      required
    />

    <input
      v-model="form.email"
      type="email"
      placeholder="البريد الإلكتروني"
      class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
      required
    />

    <input
      v-model="form.password"
      type="password"
      placeholder="كلمة السر"
      class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
      required
    />

    <input
      v-model="form.password_confirmation"
      type="password"
      placeholder="تأكيد كلمة السر"
      class="bg-blue-800 border border-blue-200 text-white rounded-md px-4 py-2 w-full text-right placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5"
      required
    />

    <button
      type="submit"
      class="bg-gray-300 text-black font-semibold py-2 w-full rounded-full hover:bg-blue-300 transition disabled:opacity-50"
      :disabled="isLoading"
    >
      {{ isLoading ? "جاري التسجيل..." : "تسجيل" }}
    </button>

    <!-- Notification -->
    <div v-if="notificationsVisible" class="text-red-400 text-sm mt-3 text-center">
      {{ errorMsg }}
    </div>
  </form>
</template>
