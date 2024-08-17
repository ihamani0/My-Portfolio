<template>
    <TheHeader></TheHeader>
    <landing-page></landing-page>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue"
import LandingPage from "./components/layout/LandingPage.vue"
export default {
    components : {
        TheHeader,
        LandingPage
    }
}
</script>
