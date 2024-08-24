<template>
    <section  ref="box" v-show="isAboutVisible" v-if="skilles && skilles.Frontend"
            class=" container mx-auto mb-40 flex flex-col items-center space-y-8  fade-in-up" >

        <header class="w-full text-center">
            <h1 class="mb-3 text-slate-400">Explore My </h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">Skills</h1>
        </header>
        
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:justify-items-center w-11/12">
                

                <!-- Frontend -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-4 md:space-y-3 ">

                    
                    <h1 class="font-semibold text-xl md:text-3xl text-slate-900/40 " >Frontend Development</h1>

                    <!-- Containe -->
                    <div class= "flex flex-wrap justify-center gap-6 w-full ">


                        <mini-card v-for="(skill,index) in skilles.Frontend"
                        :key="index"
                        :nameSkill="skill.nameSkill"
                        :img="skill.img"
                        :level="skill.Level"
                        >
                        </mini-card>
                        <!-- Child Divs -->
                    </div>
                    
                </div>
                <!-- End dic Expirnce -->


                <!-- Backend -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-3 md:relative">

                    <h1 class="font-semibold text-xl md:text-3xl text-slate-900/40 md:absolute md:top-5 " >Backend Development</h1>

                    <!-- Containe -->
                    <div class= "flex flex-wrap justify-center gap-6 w-full">

                        <mini-card v-for="(skill,index) in skilles.Backend"
                        :key="index"
                        :nameSkill="skill.nameSkill"
                        :img="skill.img"
                        :level="skill.Level"
                        >
                        </mini-card>
                    </div>
                    
                </div><!-- End dic Expirnce -->


                <!-- Other -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-3 md:relative ">
                    
                    <h1 class="font-semibold text-xl md:text-3xl text-slate-900/40  md:absolute md:top-5" >Other</h1>

                    <div class= "flex flex-wrap justify-center gap-6 w-full">

                        <mini-card v-for="(skill,index) in skilles.Other"
                            :key="index"
                            :nameSkill="skill.nameSkill"
                            :img="skill.img"
                            :level="skill.Level"
                        >
                        </mini-card>
                    </div>

                </div>


            </div>

    
    </section>
</template>
<script>
import MiniCard from "../ui/MiniCard.vue"
export default { 
    props : {
        skilles : {
            type : Object,
            required : true
        }
    },
    components : {
        MiniCard
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

@keyframes scaleIn {
0% {
    opacity: 0;
    transform: scale(0.8);
}
100% {
    opacity: 1;
    transform: scale(1);
}
}

.fade-in-up {
opacity: 0;
animation: scaleIn 0.5s ease-out forwards;
}

</style>