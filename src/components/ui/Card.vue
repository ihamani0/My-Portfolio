<template>
    <div class="w-full  border border-slate-800 rounded-3xl   flex flex-col justify-center items-center p-6 space-y-4 md:space-y-4 ">
                    <img :src="img" class=" rounded-3xl shadow-xl hover:scale-95 transition-all ease-in duration-500">
                    <h1 class="font-semibold text-xl text-slate-700 " >{{ Name }}</h1>
                    <h1 class="font-semibold text-xs text-slate-400 " >{{Technologies}}</h1>
                    
                    <div class="flex justify-center space-x-3">
                        <a :href="GithubLinks" class=" px-3 py-2 text-center border border-gray-700 rounded-3xl w-36 hover:bg-gray-700
                            hover:text-white hover:scale-105 transition-colors ">
                            Github</a>
                        
                            <a v-if="Demo" :href="Demo" class=" px-3 py-2 text-center border hover:border-gray-700 hover:bg-white hover:text-slate-950 rounded-3xl w-36 bg-gray-700
                            text-white hover:scale-105 transition-colors ">
                            Demo</a>
                    </div>   
    </div>
</template>
<script>
export default {
    props : ['Demo' ,'GithubLinks','Name','Technologies','img']
}
</script>
