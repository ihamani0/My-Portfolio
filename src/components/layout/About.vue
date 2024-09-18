<template>
    <section  ref="aboutBox"  v-show="isAboutVisible"
            class=" container mx-auto mb-40 flex flex-col items-center space-y-8  fade-in-up" >

        <header class="w-full text-center">
            <h1 class="mb-3 text-slate-400">{{$t("getToKnowMore")}}</h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">{{$t("AboutMe")}}</h1>
        </header>
        
        <div class="flex flex-col items-center space-y-6">
            <div class="md:w-9/12  flex flex-col justify-center items-center space-y-6 md:space-y-0 md:flex-row md:justify-evenly md:items-end md:space-x-6">
                
                <!-- start div Expirnce -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-0 md:w-1/3 ">

                    <img src="/public/assets/experince.svg" class="w-8 h-8">
                    <p class="font-semibold " >{{$t("Experience")}}</p>

                    <!-- Containe -->
                    <div class="w-full flex flex-col justify-center items-center">
                        <p class="block text-slate-900">{{$t("BackendDevelopment")}}</p>
                        <p class="block text-slate-900">{{$t("ExperienceYear")}}</p>
                    </div>
                    
                </div>
                <!-- End dic Expirnce -->

                <!-- start div Expirnce -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-0 md:w-1/3 ">

                    <img src="/public/assets/certificate.svg" class="w-8 h-8">
                    <p class="font-semibold " >{{$t("Education")}}</p>

                    <!-- Containe -->
                    <div class="w-full flex flex-col justify-center items-center">
                        <p class="block text-slate-900">{{$t("Unive")}}</p>
                        <p class="block text-slate-900">{{$t("Master")}}</p>
                    </div>
                </div><!-- End dic Expirnce -->
            </div>
            <!-- Paragraph -->
            <div class=" w-3/5">
                <p class="text-slate-950 leading-loose font-light ">&nbsp;&nbsp;&nbsp;&nbsp;{{$t("Description")}}</p>
            </div>
        </div>    
    </section>
</template>
<script>
export default {
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
            const boxElement = this.$refs.aboutBox;

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
        transform: translateY(30px);
    }
    to {

        opacity: 1;
        transform: translateY(0);
    }
    }

    .fade-in-up {
    animation: fadeInUp 1s ease-out;
    }

    /* .box {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .box.visible {
    opacity: 1;
    transform: translateY(0);
    } */
</style>