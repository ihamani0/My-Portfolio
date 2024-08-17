<template>
    <section class="my-10">
        <div class="container mx-auto my-20 max-w-screen-xl  ">
            <div class="flex flex-col md:flex-row items-center justify-center 
                    p-4  bg-white shadow-md rounded-lg md:p-0 md:shadow-none md:rounded-none md:bg-none"
                    >
                <!-- My img -->
                <div ref="intro_img" class="rounded-full overflow-hidden w-48 h-48 md:w-80 md:h-80 m-6
                    transform  -translate-x-full opacity-0 transition-all duration-500 ease-out">
                    <img src="../../assets/Me.jpg" alt="Me" 
                        class="w-full w-1 h-full object-cover rounded-full">
                </div>
                    

                <!-- my self-->
                <div ref="introself" class="p-6 flex flex-col items-start md:items-center space-y-4 m-6
                        transform translate-x-full opacity-0 transition-all duration-500 ease-out">
                    <h1 class="font-poppins text-xl ">Hello ,i'm </h1>
                    <div ref="MyName" class="font-poppins font-bold text-5xl text-gray-800">
                        <!-- <h1 class="font-poppins font-bold text-5xl ">Hamani issam</h1> -->
                    </div>
                    <h1 class="font-poppins font-bold text-gray-400 text-xl ">Backend Developer </h1>

                    <div class="flex justify-between space-x-4 p-1 mt-4">
                        <button  class="text-slate-950 border-slate-950 border-2 px-3 py-2 w-36 rounded-full hover:scale-95  ease-in transition-all" >Download CV</button>
                        <button class="text-white bg-slate-950 px-3 py-2 w-36 rounded-full hover:bg-orange-600  ease-in transition-colors">Contact Info</button>
                    </div>

                    <!-- icons -->
                    <div class="flex justify-center  items-center space-x-2 w-full">
                        <a href="#"><img src="../../assets/github.svg" alt="github" class="w-8 h-8"></a>
                        <a href="#"><img src="../../assets/linkedin.svg" alt="github" class="w-12 h-12"></a>
                    </div>
                </div>

                

                
            </div>
        </div>
    
    </section>
</template>
<script>
export default {
    mounted(){
        setTimeout(() => {
            this.$refs.introself.classList.remove('translate-x-full', 'opacity-0');
            this.$refs.intro_img.classList.remove('-translate-x-full', 'opacity-0');
        }, 100);
        setTimeout(() => {
            this.$refs.MyName.textContent = "Issam Hamani";
            this.$refs.MyName.classList.add('typing-effect');
            
        }, 200)
    }
}
</script>