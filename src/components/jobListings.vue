<script setup>
import { RouterLink } from 'vue-router';
import { ref, defineProps, onMounted, reactive } from 'vue';
import jobListing from '@/components/jobListing.vue'
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps(
    {
        Limiter: Number,
        showButton:
        {
            type: Boolean,
            default: false,
        },
    }
)
const state = reactive({
    jobs: [],
    isLoadong: true,
});
onMounted(async () => {
    try {
        const res = await axios.get("/api/jobs");
        state.jobs = res.data;

    } catch (error) {
        console.error('error fetching jobs', error)
    } finally {
        state.isLoadong = false;
    }
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!-- show loading if true  -->
            <div v-if="state.isLoadong" class="text-center  text-gray-500 py-6">
                <PulseLoader />
            </div>
            <!-- show job listing if isloading is false (done loading) -->

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <jobListing v-for="job in state.jobs.slice(0, Limiter || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>




    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs/" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs</RouterLink>
    </section>
</template>