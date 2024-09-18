<template>
    <footer class="container mx-auto ">
        <nav class="flex flex-col items-center justify-center space-y-4">
            
            
            <div class="hidden md:flex justify-center items-center space-x-6 p-6  ">
                <a href="#about" class="font-poppins text-2xl hover:scale-95  text-slate-900  hover:text-orange-500 transition-all ease-in "
                    @click.prevent="scrollToSection('aboutSection')" >{{$t("AboutMe")}}</a>

                <a href="" class="font-poppins text-2xl hover:scale-95 text-slate-900  hover:text-orange-500 transition-all ease-in"
                    @click.prevent="scrollToSection('projectSection')">{{$t("Projects")}}</a>
                
                <a href="" class="font-poppins text-2xl hover:scale-95 text-slate-900 hover:text-orange-500 transition-all ease-in"
                    @click.prevent="scrollToSection('skillSection')">{{$t("Skills")}}</a>
                
                
            </div>
            <div class="flex space-x-2">
                <p class="text-gray-500 text-xs">Copyright © 2024 Issam Hamani. All Rights Reserved. 
                </p>
                <img @click="changeTransState('en')" v-if="currentLanguage === 'fr'" src="/public/assets/flag-us.svg" alt="fr" class="w-4 h-4  cursor-pointer">
                <img  @click="changeTransState('fr')" v-else src="/public/assets/flag-fr.svg" alt="fr" class="w-4 h-4  cursor-pointer">
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
    computed: {
        currentLanguage() {
        return this.$i18n.locale;
        }
    },
    methods:{
        changeTransState(state){
            this.$i18n.locale = state
            localStorage.setItem('Lang' , state)
        }
    }
}
</script>