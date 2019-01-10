<template>
    <basic-grid-component></basic-grid-component>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import BasicGridComponent from "../common/grid/BasicGridComponent";

    @Component({
        components: {
            'basic-grid-component' : BasicGridComponent
        }
    })
    export default class BoardWriteComponent extends Vue {
    }

</script>

<style scoped>

</style>