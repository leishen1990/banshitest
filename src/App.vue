<template>
    <App id="app">

        <Nav>
            <!-- <keep-alive> -->
                <router-view></router-view>
            <!-- </keep-alive> -->
        </Nav>
    </App>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .lei{
        .select-placeholder{
             color:#000!important;
        }
    } 
</style>