<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>

<template>
    <RouterLink to="/">
        <div class="h-full py-2">
            <img class="h-full w-max" src="../../assets/logo.svg" />
        </div>
    </RouterLink>
</template>