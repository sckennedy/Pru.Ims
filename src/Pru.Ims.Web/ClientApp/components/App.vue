<template>
    <v-app>
        <header-nav></header-nav>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
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
