<template>
    <button>{{ name }}</button>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            name: {
                type: String,
                default: '按钮'
            }
        }
    }
</script>