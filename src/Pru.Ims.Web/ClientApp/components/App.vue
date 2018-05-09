<template>
    <v-app>
        <vue-progress-bar></vue-progress-bar>
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
    import navBar from 'components/shared/navBar.vue'

    export default {
        components: {
            HeaderNav,
            navBar
        }
    }
</script>

<style>
</style>
