<template>
    <p>{{ name }}</p>
</template>

<script>
    export default {
        data() {

        },
        props: {
            name: {
                type: String,
                default: 'default'
            }
        }
    }
</script>
