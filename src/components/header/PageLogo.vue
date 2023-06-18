<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink },
    props: {
        mode: {
            type: String,
            default() { return 'dark' }
        }
    }
}
</script>

<template>
    <RouterLink to="/">
        <div class="h-full py-2">
            <img class="h-full w-max" src="../../assets/logo-light.svg" v-if="mode === 'light'" />
            <img class="h-full w-max" src="../../assets/logo-dark.svg" v-else />
        </div>
    </RouterLink>
</template>