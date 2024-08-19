<template>
    <div class="font-poppins">
        <TheHeader :scrollToAbout="scrollToAboutSection">

        </TheHeader>
        <landing-page></landing-page>
        

        <AboutMe ref="aboutSection"></AboutMe>
        <skills></skills> 

        <MyProject></MyProject>

        <contact></contact>
        <Footer></Footer>
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
        scrollToAboutSection() {
            const aboutSection = this.$refs.aboutSection.$el;
            if (aboutSection) {
                window.scroll({
                    top: aboutSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        },
    }
}
</script>

