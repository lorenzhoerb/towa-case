<script>
import PageLogo from './PageLogo.vue'
import NavItem from './NavItem.vue'
import navData from '../../router/nav'
export default {
    data() {
        return {
            nav: navData.main
        }
    },
    components: {
        PageLogo,
        NavItem
    }
}
</script>

<template>
    <header class="flex justify-center border-b-2 border-gray-300 px-6">
        <div class="flex justify-between container h-20">
            <div class="flex space-x-16">
                <PageLogo />
                <nav class="flex space-x-6">
                    <NavItem v-for="(navItem, index) in nav" :key="index" :title="navItem.title" :to="navItem.to" />
                </nav>
            </div>

            <div class="flex items-center">
                <button
                    class="bg-primary hover:bg-violet-700 font-semibold h-fit cursor-pointer border-none text-on-primary py-2 px-4 rounded-md">Contact
                    Us</button>
            </div>
        </div>
    </header>
</template>