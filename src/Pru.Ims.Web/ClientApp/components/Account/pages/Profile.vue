<template>
    <h1>Profile</h1>
</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: '',
                rememberMe: false,
                error: false,
            }
        },
        computed: {
            loginError() {
                return this.$store.state.loginError
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style>

    
</style>
