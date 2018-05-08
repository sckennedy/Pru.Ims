<template>
    <div id="student">
        <h1>Student</h1>
        {{ student.firstname }}
    </div>
</template>

<script>

    export default {
        props: ['id'],
        computed: {
            student() {
                return this.$store.getters.student(this.id)
            }
        }
    }
</script>

<style>

 
</style>
