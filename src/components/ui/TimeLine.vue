<template>
    <li class="relative grid grid-cols-4 h-20">
        <div :class="{ timeline: !isLast }" class="justify-self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-slate-600"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
            </svg>
        </div>
        <div class="text-sm text-gray-500 col-span-3">
            <p class="font-semibold">{{ event }}</p>
            <p>{{ DescriptionEvent }}</p>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        event: {
            type: String,
            required: true
        },
        DescriptionEvent: {
            type: String,
            required: true
        },
        isLast: {
            type: Boolean,
            required: true
        }
    },
}
</script>
<style scoped>
.timeline {
    @apply before:absolute before:left-[46px] /* for screen 378px* */  sm:before:left-[61px]  before:h-full before:w-[2px] before:bg-slate-600;
}
</style>