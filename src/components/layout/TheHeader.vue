<template>
    <header class="container mx-auto">
        <nav class="relative">
            <div class="hidden md:flex justify-center items-center space-x-6 p-6 shadow-sm ">

                <a href="#about" class="font-poppins text-xl hover:scale-95  text-slate-900  hover:text-orange-500 transition-all ease-in "
                    @click.prevent="scrollToAbout" >About</a>

                <a href="" class="font-poppins text-xl hover:scale-95 text-slate-900  hover:text-orange-500 transition-all ease-in">
                    Project</a>
                <a href="" class="font-poppins text-xl hover:scale-95 text-slate-900 hover:text-orange-500 transition-all ease-in">
                    Skilles</a>
                <a href="" class="font-poppins text-xl hover:scale-95  text-slate-900 hover:text-orange-500 transition-all ease-in">
                    Contact</a>
            </div>

            <!-- For mobil -->
            <div class="flex justify-between items-center p-6 ">

                <div class="md:hidden">
                    <h1 class="text-2xl font-semibold font-poppins">Portfolio</h1>
                </div>
                <!-- Humburger Menu -->
                <div class="md:hidden cursor-pointer" @click="toggoleMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"
                        class=" text-slate-800">
                        <path fill="currentColor"
                            d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z">
                        </path>
                    </svg>
                </div>
            </div>

            <!-- For Mobile menu -->
            <div ref="menuMobile"
                class="hidden md:hidden mt-4 transition-all duration-300 ease-in transform origin-top scale-y-0   absolute top-10 left-2 right-2 z-10">
                <div
                    class="flex flex-col items-center space-y-6 rounded-lg py-8 px-4 absolute left-20 right-20 shadow-2xl bg-white">
                    <a href="" class="text-slate-700 hover:scale-105 transition-all ease-inhover:font-semibold">
                        About</a>
                    <a href="" class="text-slate-700 hover:scale-105 transition-all ease-inhover:font-semibold">
                        Skills</a>
                    <a href="" class="text-slate-700 hover:scale-105 transition-all ease-inhover:font-semibold">
                        Projects</a>
                    <a href="" class="text-slate-700 hover:scale-105 transition-all ease-in hover:font-semibold">
                        Contact</a>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>


export default {
    props : {
        scrollToAbout: {
            type: Function,
            required: true,
            },
    } ,
    methods: {
        toggoleMenu() {

            const menuMobile = this.$refs.menuMobile;
            if (menuMobile.classList.contains('scale-y-0')) {

                menuMobile.classList.remove('scale-y-0', 'hidden');
                menuMobile.classList.add('scale-y-100');
            } else {
                menuMobile.classList.remove('scale-y-100');
                menuMobile.classList.add('scale-y-0');
                setTimeout(() => {
                    menuMobile.classList.add('hidden');
                }, 300); // Match this duration with your Tailwind duration
            }

        }
    }
}

</script>
