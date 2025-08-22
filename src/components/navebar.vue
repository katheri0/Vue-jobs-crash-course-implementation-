<script setup>
import { RouterLink, useRoute } from 'vue-router';
// import logo from '@/assets/images/logo.png';   
import five from '@/assets/images/5.png';
import L2J from '@/assets/images/L2J.png';
const isActiveLink = (routePath) => {

  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <nav class="bg-blue-800 border-b border-green-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-center md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class=" h-20 w-auto" :src="L2J" alt="Link to Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Link2Jobs</span>
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/main" :class="[
                isActiveLink('/main')
                  ? 'bg-blue-900'
                  : 'hover:bg-gray-900 hover:text-white',
                'text-white',
                'px-3',
                'py-2',
                'rounded-md',
              ]">Home</RouterLink>
              <RouterLink to="/jobs" :class="[
                isActiveLink('/jobs')
                  ? 'bg-blue-900'
                  : 'hover:bg-gray-900 hover:text-white',
                'text-white',
                'px-3',
                'py-2',
                'rounded-md',
              ]">Jobs</RouterLink>
              <RouterLink to="/jobs/add" :class="[
                isActiveLink('/jobs/add')
                  ? 'bg-blue-900'
                  : 'hover:bg-gray-900 hover:text-white',
                'text-white',
                'px-3',
                'py-2',
                'rounded-md',
              ]">Add Job</RouterLink>
              <RouterLink to="/" :class="[
                isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white',
                'text-white px-3 py-2 rounded-md'
              ]">main</RouterLink>


            </div>
          </div>
          <RouterLink class="flex items-center ml-7" to="/">
              <img class="h-12 w-auto" :src="five" alt="Link to Jobs" />
            </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>