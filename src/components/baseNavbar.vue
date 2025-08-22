<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import L2J from "@/assets/images/L2J.png";
import singinPageView from "@/views/singinPageView.vue";
import loginPageView from "@/views/loginPageView.vue";
// Dropdown state
const showLoginDropdown = ref(false);
const showSignupDropdown = ref(false);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

// toggle helpers
const toggleLogin = () => {
  showLoginDropdown.value = !showLoginDropdown.value;
  showSignupDropdown.value = false; // close signup if login is open
};

const toggleSignup = () => {
  showSignupDropdown.value = !showSignupDropdown.value;
  showLoginDropdown.value = false;
};
</script>

<template>
  <nav class="bg-blue-800 border-b border-blue-700 relative">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <RouterLink class="flex items-center mr-4" to="/">
          <img class="h-20 w-auto" :src="L2J" alt="Link to Jobs" />
          <span class="hidden md:block text-white text-2xl font-bold ml-2">Link2Jobs</span>
        </RouterLink>

        <!-- Links -->
        <div class="ml-auto flex space-x-2 relative">
          <RouterLink
            to="/"
            :class="[
              isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white',
              'text-white px-3 py-2 rounded-md'
            ]"
          >Home</RouterLink>

          <!-- Signup Dropdown -->
          <button
            @click="toggleSignup"
            class="text-white px-3 py-2 rounded-md hover:bg-gray-900"
          >
            Sign Up
          </button>
          <div
            v-if="showSignupDropdown"
            class="absolute top-12 right-0 mt-2 w-80 bg-black text-white rounded-lg shadow-lg z-50"
          >
            <div class="p-4 bg-blue-900 rounded-lg">
              <singinPageView />
            </div>
          </div>

          <!-- Login Dropdown -->
          <button
            @click="toggleLogin"
            class="text-white px-3 py-2 rounded-md hover:bg-gray-900"
          >
            Log In
          </button>
          <div
            v-if="showLoginDropdown"
            class="absolute top-12 right mt-2 w-80 bg-black text-white rounded-lg shadow-lg z-50"
          >
            <div class="p-4 bg-blue-900 rounded-lg">
              <loginPageView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
