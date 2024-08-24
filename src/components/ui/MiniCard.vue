<template >
    <!-- Child Divs -->
    <div class="w-auto p-4  rounded-lg space-x-2 shadow-md hover:shadow-lg transition-shadow ease-out flex justify-between items-center">
                            
                            <img :src="img" class="w-6 h-6" alt="svg">
                            
                            <div class="flex flex-col justify-start">
                                <p class="font-semibold text-slate-950">{{ nameSkill }}</p>
                                <!-- <p class="font-light text-xs text-slate-950">{{ level }}</p> -->
                                <div id="level" class="w-auto flex justify-start space-x-1">
                                    <div 
                                        v-for="(field,index) in circles" :key="index"
                                        
                                        :class="['rounded-full w-2 h-2 border border-black '
                                            , field ? 'bg-black' : 'bg-white'
                                        ]"
                                        >
                                
                                    </div>
                                    
                                </div> 
                            </div>
    </div>
</template>
<script>
export default {
    props : ['img','nameSkill', 'level'] , 
    computed : {
        circles(){
            let fieldLevel = this.level * 2;
            
            return Array(5).fill(false)
                .map(
                    ( _ , index)=>{
                        return index < fieldLevel;
                    }
                )
        }
    }
}
</script>

<style>
.level-1{

}
.level-2{

}
.level-3{

}
</style>