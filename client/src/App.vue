<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from "vue-class-component";

    @Component
    export default class App extends Vue {
        name:string = 'app';
    }
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body,
    div,
    ul,
    li,
    input,
    textarea,
    select,
    option,
    label,
    xmp {
        font-family: NanumSquareR;
        text-align: left;
        font-size: 12px;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
    }
</style>
