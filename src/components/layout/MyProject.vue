<template>
    <section  ref="box" v-show="isAboutVisible"
            class=" container mx-auto mb-40 flex flex-col items-center space-y-8  fade-in-up" >

        <header class="w-full text-center">
            <h1 class="mb-3 text-slate-400">{{$t("BrowseMyRecent")}}</h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">{{$t("Projects")}}</h1>
        </header>
        
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:justify-items-center w-11/12">
                
                <project-card v-for="(project,index) in projects" :key="index"
                    :Demo="project.Demo"
                    :GithubLinks="project.GithubLinks"
                    :Name="project.Name"
                    :Technologies="project.Technologies"
                    :img="project.img"
                >
                </project-card>

                
            </div>

    
    </section>
</template>
<script>
import ProjectCard from "../ui/Card.vue"
export default {
    props : {
        projects : {
            type:Object,
            required : true
        }
    } ,
    components : {
        ProjectCard
    },
    data(){
        return {
            isAboutVisible : false,
            isMobile: false,

        }
    },
    methods : {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768 ;
            
            if (this.isMobile) {
                    this.isAboutVisible = true;
                    window.removeEventListener('scroll', this.handleScroll);
                } else {
                    window.addEventListener('scroll', this.handleScroll);
                    this.handleScroll();
                }
        },
        handleScroll(){
            if (this.isMobile) return;
            const boxElement = this.$refs.box;

                if(boxElement){
                    const boxTop = boxElement.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    
                    // Check if the element is within the viewport
                        if (boxTop < windowHeight) {
                        this.isAboutVisible = true;
                        } else {
                        this.isAboutVisible = false;
                        }
                }
        },
        
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        if (!this.isMobile) {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll(); // Check on mount
        }

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.checkMobile);
    },
}
</script>


<style scoped>

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {

        opacity: 1;
        transform: translateX(0);
    }
    }

    .fade-in-up {
    animation: fadeInUp 1s ease-out;
    }

</style>