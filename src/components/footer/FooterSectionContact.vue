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
            <li class="hover:underline mb-1">
                <font-awesome-icon :icon="['fas', 'phone']" class="contact-icon" />
                <a href="tel:+43111111111">+43 111 111 111</a>
            </li>
            <li class="hover:underline mb-1">
                <font-awesome-icon :icon="['fas', 'envelope']" class="contact-icon" />
                <a href="mailto:office@vecotry.com">office@vecotry.com</a>
            </li>
            <li class="mb-1">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="contact-icon" />
                Währinger Straße 10, 1180 Wien
            </li>
        </ul>
    </FooterSection>
</template>

<style>
.contact-icon {
    @apply mr-2 inline-block;
}
</style>