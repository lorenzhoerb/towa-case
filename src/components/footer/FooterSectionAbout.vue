<script>
import FooterSection from './FooterSection.vue'
import PageLogo from '../header/PageLogo.vue'
export default {
    components: {
        FooterSection,
        PageLogo
    }
}
</script>

<template>
    <FooterSection>
        <div class="w-20">
            <PageLogo />
        </div>
        <p>Vectoy empowers businesses and individuals in the digital age.</p>
    </FooterSection>
</template>