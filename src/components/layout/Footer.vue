<template>
    <footer class="container mx-auto hidden md:block">
        <nav class="flex flex-col items-center justify-center space-y-4">
            
            
            <div class="flex justify-center items-center space-x-6 p-6  ">
                <a href="#about" class="font-poppins text-2xl hover:scale-95  text-slate-900  hover:text-orange-500 transition-all ease-in "
                    @click.prevent="scrollToSection('aboutSection')" >About</a>

                <a href="" class="font-poppins text-2xl hover:scale-95 text-slate-900  hover:text-orange-500 transition-all ease-in"
                    @click.prevent="scrollToSection('projectSection')">Project</a>
                
                <a href="" class="font-poppins text-2xl hover:scale-95 text-slate-900 hover:text-orange-500 transition-all ease-in"
                    @click.prevent="scrollToSection('skillSection')">Skilles</a>
                
                <a href="" class="font-poppins text-2xl hover:scale-95  text-slate-900 hover:text-orange-500 transition-all ease-in"
                    >Contact</a>
            </div>
            <div>
                <p class="text-gray-500 text-xs">Copyright © 2024 Issam Hamani. All Rights Reserved.</p>
            </div>
        </nav>
    </footer>
</template>
<script>
export default {
    props : {
        scrollToSection: {
            type: Function,
            required: true,
        }
    } ,
}
</script>