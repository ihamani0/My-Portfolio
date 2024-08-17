<template>
    <div class="font-poppins">
        <TheHeader></TheHeader>
        <landing-page></landing-page>
        <AboutMe></AboutMe> <!-- Correct casing -->
    </div>
    
</template>
<script>
import AboutMe from "./components/layout/About.vue";

import TheHeader from "./components/layout/TheHeader.vue";
import LandingPage from "./components/layout/LandingPage.vue";

export default {
    components: {
        TheHeader,
        LandingPage,
        AboutMe
    }
}
</script>

