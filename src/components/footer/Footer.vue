<script>
import FooterSectionAbout from './FooterSectionAbout.vue'
import FooterSectionNav from './FooterSectionNav.vue'
import FooterSectionContact from './FooterSectionContact.vue'
import navData from '../../router/nav'
export default {
    components: {
        FooterSectionAbout,
        FooterSectionNav,
        FooterSectionContact,
    },
    data() {
        return {
            mainNav: navData.main
        }
    }
}
</script>

<template>
    <footer class="bg-violet-950 text-primary-light pt-8 pb-4">
        <div class="mx-auto w-full max-w-screen-lg">
            <div class="flex flex-col px-2 justify-between space-y-5 md:flex-row sm:px-0 sm:space-x-5 items-center">
                <FooterSectionAbout />
                <FooterSectionNav title="Quick Links" :nav="mainNav" />
                <FooterSectionContact />
            </div>
            <div class="mt-5">
                <p class="text-sm text-center">© 2023 Vectory</p>
            </div>
        </div>
    </footer>
</template>