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
        <p>Vectoy is a technology company dedicated to creating innovative solutions that empower businesses and
            individuals
            in the digital age.</p>
    </FooterSection>
</template>