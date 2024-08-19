<template>
    <section  ref="aboutBox"  v-show="isAboutVisible"
            class=" container mb-40 flex flex-col items-center space-y-8  fade-in-up" >

        <header class="w-full text-center">
            <h1 class="mb-3 text-slate-400">get to know more</h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">About Me</h1>
        </header>
        
        <div class="flex flex-col items-center space-y-6">
            <div class="md:w-9/12  flex flex-col justify-center items-center space-y-6 md:space-y-0 md:flex-row md:justify-evenly md:items-end md:space-x-6">
                
                <!-- start div Expirnce -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-0 md:w-1/3 ">

                    <img src="../../assets/experince.svg" class="w-8 h-8">
                    <p class="font-semibold " >Experince</p>

                    <!-- Containe -->
                    <div class="w-full flex flex-col justify-center items-center">
                        <p class="block text-slate-900">Backend</p>
                        <p class="block text-slate-900">1+ Year Experince</p>
                    </div>
                    
                </div>
                <!-- End dic Expirnce -->

                <!-- start div Expirnce -->
                <div class="w-full  border border-slate-800 rounded-3xl flex flex-col justify-center items-center p-6 space-y-3 md:space-y-0 md:w-1/3 ">

                    <img src="../../assets/certificate.svg" class="w-8 h-8">
                    <p class="font-semibold " >Education</p>

                    <!-- Containe -->
                    <div class="w-full flex flex-col justify-center items-center">
                        <p class="block text-slate-900">Univ Farhat Abbase</p>
                        <p class="block text-slate-900">Master Degree</p>
                    </div>
                </div><!-- End dic Expirnce -->
            </div>
            <!-- Paragraph -->
            <div class=" w-3/5">
                <p class="text-slate-950 leading-loose font-light ">&nbsp;&nbsp;&nbsp;&nbsp;My name is Haman Issam, a dedicated backend developer with a master's degree in cybersecurity. 
                    I specialize in building secure and efficient server-side applications, 
                    combining my expertise in backend development with a strong foundation in cybersecurity</p>
            </div>
        </div>    
    </section>
</template>
<script>
export default {
    data(){
        return {
            isAboutVisible : false,
        }
    },
    methods : {
        handleScroll(){
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
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Check on mount

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
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