<script>
import { RouterLink } from 'vue-router';
import FooterSection from './FooterSection.vue'
export default {
    components: {
        FooterSection,
        RouterLink
    },
    props: {
        title: String,
        nav: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <FooterSection :title="title">
        <ul>
            <RouterLink :to="navItem.to" v-for="(navItem, index) in nav" :key="index">
                <li class="mb-1 hover:underline">
                    <a>{{ navItem.title }}</a>
                </li>
            </RouterLink>
        </ul>
    </FooterSection>
</template>