<template>
    <v-container>
        <h1>Students</h1>
        <v-layout row wrap v-for="student in students"
                    :key="student.id">
            <v-flex xs12>
                <v-btn flat
                    :to="'/Student/'+ student.id">{{student.firstname}} {{student.surname}}
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>

    export default {
        name: 'Students',
        computed: {
            students() {
                console.log (this.$store.getters.students)
                return this.$store.getters.students
            }
        }
    }
</script>

<style>

 
</style>
