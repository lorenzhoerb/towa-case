<script>
import FooterSection from './FooterSection.vue'
export default {
    components: {
        FooterSection,
    }
}
</script>

<template>
    <FooterSection title="Contact">
        <ul>
            <li class="hover:underline mb-1"><a href="tel:+43111111111">+43 111 111 111</a></li>
            <li class="hover:underline mb-1"><a href="mailto:office@vecotry.com">office@vecotry.com</a></li>
            <li class="mb-1">Währinger Straße 10<br /> 1180 Wien</li>
        </ul>
    </FooterSection>
</template>