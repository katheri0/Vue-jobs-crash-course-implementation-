<script setup>
import navebar from '@/components/navebar.vue';
import { RouterView } from 'vue-router';
import BaseComponentpage from './views/BaseComponentpage.vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>
<template>
        <navebar  v-if="!route.meta.hideNavbar" />
        <RouterView/>
</template>