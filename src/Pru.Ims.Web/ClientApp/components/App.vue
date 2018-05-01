<template>
    <div class="main-app">
        <header-nav></header-nav>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderNav from './header-nav'

    export default {
        components: {
            HeaderNav
        }
    }
</script>

<style lang="scss">
</style>
