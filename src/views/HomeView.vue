<script setup>
import hero from '@/components/hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import jobListings from '@/components/jobListings.vue'

</script>

<template>
     <hero />
    <HomeCards/> 
    <jobListings :limiter="3" :show-button="true"/>
</template>