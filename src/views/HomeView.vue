<script setup>
import hero from '@/components/hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import jobListings from '@/components/jobListings.vue'
import Navebar from '@/components/navebar.vue';

</script>

<template>
    <Navebar/>
     <hero />
    <HomeCards/> 
    <jobListings :Limiter="3" :showButton="true"/>
</template>