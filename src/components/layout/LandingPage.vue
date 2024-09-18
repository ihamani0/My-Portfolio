<template>
    <section class="mb-40">
        <div class="container mx-auto my-20 ">
            <div class="flex flex-col md:flex-row items-center justify-center 
                    p-4   md:p-0 bg-none"
                    >
                <!-- My img -->
                <div ref="intro_img" class="rounded-full overflow-hidden w-48 h-48 md:w-80 md:h-80 m-6
                    transform  -translate-x-full opacity-0 transition-all duration-500 ease-out">
                    <img :src="profilImg" alt="Me" 
                        class="w-full h-full object-cover rounded-full">
                </div>
                    

                <!-- my self-->
                <div ref="introself" class="p-6 flex flex-col items-start md:items-center space-y-4 
                        transform translate-x-full opacity-0 transition-all duration-500 ease-out">
                    <h1 class="font-poppins text ">{{ $t('welcome') }}</h1>
                    <div ref="MyName" class="font-poppins font-bold text-4xl text-gray-900">
                        <!-- <h1 class="font-poppins font-bold text-5xl ">Hamani issam</h1> -->
                    </div>
                    <h1 class="font-poppins font-bold text-gray-400 text ">{{ $t('BackendDeveloper') }} </h1>

                    <div class="flex justify-between space-x-4 p-1 mt-4">
                        <a :href="linkCv"  class="text-slate-950  border-slate-950 border-2 text-xs md:text-base  px-3 py-2 rounded-full hover:scale-95  ease-in transition-all cursor-pointer" >
                            {{ $t('downloadCv') }}</a>
                        <button class="text-white bg-slate-950 px-3 py-2 text-xs md:text-base  rounded-full hover:bg-orange-600  ease-in transition-colors"
                        @click="scrollToSection('contactSection')">  {{ $t('ContactInfo') }}</button>
                    </div>

                    <!-- icons -->
                    <div class="flex justify-center  items-center space-x-2 w-full">
                        <a :href="GithubLink"><img src="/public/assets/github.svg" alt="github" class="w-8 h-8"></a>
                        <a :href="LinkdInLink"><img src="/public/assets/linkedin.svg" alt="github" class="w-12 h-12"></a>
                    </div>
                </div>

                

                
            </div>
        </div>
    
    </section>
</template>
<script>
export default {
    props : {
        scrollToSection : {
            type : Function , 
            required : true
        } , 
        fullName : {
            type : String , 
            required : true
        } , 
        linkCv : {
            type : String , 
            required : true
        } , 
        GithubLink : {
            type : String , 
            required : true
        } , 
        LinkdInLink : {
            type : String , 
            required : true
        } , 
        profilImg : {
            type : String , 
            required : true
        } , 
    },
    mounted(){
        
        setTimeout(() => {
            this.$refs.introself.classList.remove('translate-x-full', 'opacity-0');
            this.$refs.intro_img.classList.remove('-translate-x-full', 'opacity-0');
        }, 100);

        setTimeout(() => {
            this.$refs.MyName.textContent = this.fullName;
            this.$refs.MyName.classList.add('typing-effect');
            
        }, 200)
    }
}
</script>
<style scoped>
.typing-effect {
    white-space: nowrap; /* Prevents text from wrapping */
    overflow: hidden; /* Hides the text that overflows the container */
    border-right: 2px solid #ea580c; /* Creates the blinking cursor */
    width: 0; /* Initially hides the text */
    animation: typing 3s steps(15, end) forwards, blink-caret 0.75s step-end infinite;
}
@keyframes typing {
    from { width: 0; }
    to { width: 18rem; } /* Adjust this based on the length of your text */
}
@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #ea580c; } /* Cursor color */
}
</style>