<template>
    <div class="font-poppins" v-if="AllDetails && AllDetails.Links">
        
        <TheHeader :scrollToSection="scrollToSection"></TheHeader>
        <landing-page :scrollToSection="scrollToSection"
            :fullName="AllDetails.FullName"
            :linkCv="AllDetails.LinkCv"
            :LinkdInLink="AllDetails.Links.linkdIn"
            :GithubLink="AllDetails.Links.GitHub"
            :profilImg="AllDetails.profilImg"
        >
        </landing-page>
        

        <AboutMe ref="aboutSection"
            :description="AllDetails.Description"
        ></AboutMe>


        <skills ref="skillSection" :skilles="AllDetails.Skilles"
        ></skills> 

        <MyProject ref="projectSection" :projects="AllDetails.Projects"></MyProject>

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

    computed : {
        AllDetails(){
            //console.log(this.$store.getters.getDetails)
            return this.$store.getters.getDetails
        }
    },

    methods : {
        scrollToSection(sectionName) {
            const section = this.$refs[sectionName];
            if (section) {
                section.$el.scrollIntoView({behavior: 'smooth'});
            }
        },
        async loadDetails(){
            
            try {
                await this.$store.dispatch("loadDetails");
                
            } catch (error) {
                console.error(error);
            }
        }

    },
    created(){
        this.loadDetails();
    },
    
}
</script>

<style>
html, body {
    scroll-behavior: smooth !important;
}
</style>