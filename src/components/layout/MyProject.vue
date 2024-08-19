<template>
    <section  ref="box" v-show="isAboutVisible"
            class=" container mb-40 flex flex-col items-center space-y-8  fade-in-up" >

        <header class="w-full text-center">
            <h1 class="mb-3 text-slate-400">Browse My Recent</h1>
            <h1 class="mb-3 text-3xl md:text-3xl lg:text-5xl font-bold text-slate-700 ">Projects</h1>
        </header>
        
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:justify-items-center w-11/12">
                
                
                <div class="w-full  border border-slate-800 rounded-3xl   flex flex-col justify-center items-center p-6 space-y-4 md:space-y-4 ">
                    <img src="../../assets/Ecomme-project.png" class=" rounded-3xl shadow-xl hover:scale-95 transition-all ease-in duration-500">
                    <h1 class="font-semibold text-xl text-slate-700 " >MultiVendor-Ecomme-App</h1>
                    <h1 class="font-semibold text-xs text-slate-400 " >bootsrap + jquery + Laravel + mysql</h1>
                    <a href="https://github.com/ihamani0/ecommerce" class=" px-3 py-2 text-center border border-gray-700 rounded-3xl w-36 hover:bg-gray-700
                        hover:text-white hover:scale-105 transition-colors ">
                        Github</a>
                </div>

                <div class="w-full  border border-slate-800 rounded-3xl   flex flex-col justify-center items-center p-6 space-y-4 md:space-y-4 ">
                    <img src="../../assets/coachFind.png" class=" rounded-3xl shadow-xl hover:scale-95 transition-all ease-in duration-500">
                    <h1 class="font-semibold text-xl text-slate-700 " >Find Coach(demo)</h1>
                    <h1 class="font-semibold text-xs text-slate-400 " >Vue.js + Firebase</h1>
                    <div class="flex justify-center space-x-3">
                        <a href="https://github.com/ihamani0/coaches-Vue-firebase-project" class=" px-3 py-2 text-center border border-gray-700 rounded-3xl w-36 hover:bg-gray-700
                        hover:text-white hover:scale-105 transition-colors ">
                        Github</a>
                        <a href="https://vue-project-coachs.web.app/coaches" class=" px-3 py-2 text-center border hover:border-gray-700 hover:bg-white hover:text-slate-950 rounded-3xl w-36 bg-gray-700
                        text-white hover:scale-105 transition-colors ">
                        Demo</a>
                    </div>
                </div>


                <div class="w-full  border border-slate-800 rounded-3xl   flex flex-col justify-center items-center p-6 space-y-4 md:space-y-4 ">
                    <img src="../../assets/donorBlood.png" class=" rounded-3xl shadow-xl hover:scale-95 transition-all ease-in duration-500">
                    <h1 class="font-semibold text-xl text-slate-700 " >Donor Blood(demo)</h1>
                    <h1 class="font-semibold text-xs text-slate-400 " >Html + css + js + Php + mysql </h1>
                    <div class="flex justify-center space-x-3">
                        <a href="https://github.com/ihamani0/donorBloodWebsite/tree/master" class=" px-3 py-2 text-center border border-gray-700 rounded-3xl w-36 hover:bg-gray-700
                        hover:text-white hover:scale-105 transition-colors ">
                        Github</a>
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