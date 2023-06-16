<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        title: String,
        to: String
    },
    components: { RouterLink }
}
</script>

<template>
    <RouterLink :to="to">
        <div class="nav-item">
            <div calss="py-1">
                {{ title }}
            </div>
        </div>
    </RouterLink>
</template>

<style>
.nav-item {
    @apply w-full h-full flex items-center justify-center px-1 cursor-pointer text-lg text-gray-500 whitespace-nowrap static transition-colors transition-shadow duration-200;
}


.nav-item:hover {

    @apply text-primary;
    box-shadow: 0 4px 0 0 #7c3aed;
}
</style>