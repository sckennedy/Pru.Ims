<template>
    <div class="container-fluid">
        <header-nav></header-nav>
        <router-view></router-view>
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
