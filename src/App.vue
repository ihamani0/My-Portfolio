<template>
    <div class="font-poppins">
        
        <TheHeader :scrollToSection="scrollToSection"></TheHeader>
        <landing-page></landing-page>
        

        <AboutMe ref="aboutSection"></AboutMe>
        <skills ref="skillSection"></skills> 

        <MyProject ref="projectSection"></MyProject>

        <contact ref="contactSection"></contact>
        <Footer :scrollToSection="scrollToSection"></Footer>
    </div>
    
</template>
<script>
import AboutMe from "./components/layout/About.vue";

import TheHeader from "./components/layout/TheHeader.vue";
import LandingPage from "./components/layout/LandingPage.vue";
import Skills from "./components/layout/Skills.vue";
import MyProject from "./components/layout/MyProject.vue"
import Contact from "./components/layout/Contact.vue"
import Footer from "./components/layout/Footer.vue"

export default {
    components: {
        TheHeader,
        LandingPage,
        AboutMe ,
        Skills,
        MyProject,
        Contact,
        Footer
    },
    methods : {
        scrollToSection(sectionName) {
            const section = this.$refs[sectionName];
            if (section) {
                section.$el.scrollIntoView({behavior: 'smooth'});
            }
        },
    }
}
</script>

<style>
html, body {
    scroll-behavior: smooth !important;
}
</style>