<template >
    <!-- Child Divs -->
    <div class="w-auto p-4  rounded-lg space-x-2 shadow-md hover:shadow-lg transition-shadow ease-out flex justify-between items-center">
                            
                            <img :src="img" class="w-6 h-6" alt="svg">
                            
                            <div class="flex flex-col justify-start">
                                <p class="font-semibold text-slate-950">{{ nameSkill }}</p>
                                <p class="font-light text-xs text-slate-950">{{ level }}</p>
                            </div>
    </div>
</template>
<script>
export default {
    props : ['img','nameSkill', 'level'] , 
    
}
</script>