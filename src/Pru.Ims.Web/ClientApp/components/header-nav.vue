<template>
    <div id="navigation">
        <v-navigation-drawer app temporary clipped v-model="sideNav">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <template v-for="(item, i) in menuItems">
                    <v-divider v-if="item.divider"
                               :key="i"
                               dark
                               class="my-3"></v-divider>
                    <v-list-tile v-else
                                 :key="i"
                                 :to="item.link">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark app absolute clipped-left class="primary">
            <v-toolbar-side-icon @click="sideNav = !sideNav" v-if="!isLoggedIn"></v-toolbar-side-icon>
            <v-toolbar-title class=" ml-3 mr-5">
                <router-link to="/" tag="span" style="cursor: pointer">BRC IMS</router-link>
            </v-toolbar-title>
            <v-text-field solo-inverted
                          flat
                          label="Search"
                          prepend-icon="search">
            </v-text-field>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>
                    <v-icon left>lock_open</v-icon>
                    Login
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        name: 'header-nav',
        data() {
            return {
                sideNav: false,
                menuItems: [
                    {divider: true},
                    {icon: 'home', text: 'Home', link: '/'},
                    {icon: 'people', text: 'Students', link: '/students'},
                    {icon: 'school', text: 'Teachers', link: '/teachers'},
                    {divider: true},
                    {icon: 'person', text: 'My Account', link: '/account/profile'},
                    {icon: 'lock_open', text: 'Logout', link: '/account/logout'}
                ]
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.state.loggedIn
            },
            name() {
                return this.$store.state.userName
            }
        },
        methods: {
            login() {
                this.$store.dispatch('logout', {
                })
            }
        }
    }
</script>
<style>

</style>
