<script>
import PlaceHolder from '../components/PlaceHolder.vue';
export default {
    props: {
        title: String
    },
    components: {
        PlaceHolder,
    }
}
</script>

<template>
    <div class="mx-auto max-w-4xl py-16">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">{{ title }}</h1>
        <PlaceHolder />
        <slot />
    </div>
</template>