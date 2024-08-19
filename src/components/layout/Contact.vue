<template>
    <section ref="contactBox"  v-show="isAboutVisible"
            class=" container mb-40 flex flex-col justify-center items-center space-y-8  fade-in-up" >

        <header class="w-full text-center"> 
            <h1 class="mb-3 text-slate-400">Get in Touch</h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">Contact</h1>
        </header>

        <div class="p-8 border border-slate-700 mx-4 md:w-1/3 rounded-3xl">
            <div class="flex flex-col-reverse items-start  md:flex-row md:justify-around md:items-center">
                <!-- icon + Email -->
                <div class="flex justify-around items-center space-x-1">
                    <img src="../../assets/email.svg" class="rounded-full w-7 h-7 object-contain" alt="mail">
                    <a href="mailto:issamhamani2000@gmail.com" class="font-bold hover:underline hover:underline-offset-4 hover:text-gray-500">
                        issamhamani2000@gmail.com</a>
                </div>
                <!-- icon + Linkdin -->
                <div class="flex justify-around items-center space-x-1">
                    <img src="../../assets/linkedin.svg" class="rounded-full w-9 h-9 object-contain" alt="mail">
                    <a href="https://www.linkedin.com/in/issam-hamani-686771321/" class="font-bold hover:underline hover:underline-offset-4 hover:text-gray-500">
                        LinkdIn</a>
                </div>
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
            const boxElement = this.$refs.contactBox;

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
        transform: translateX(30px);
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