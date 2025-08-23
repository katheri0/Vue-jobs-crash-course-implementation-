<script setup>
import navebar from '@/components/navebar.vue';
import { RouterView } from 'vue-router';
import BaseComponentpage from './views/BaseComponentpage.vue';
</script>
<template>
        <navebar/>
        <RouterView/>
</template>