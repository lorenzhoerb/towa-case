<script>
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <div class="w-full max-w-sm">
        <h4 class="font-semibold mb-2" v-if="title">{{ title }}</h4>
        <slot />
    </div>
</template>