<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<style>
html,body{
  height: 100%; 
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	max-width: 750px;
	margin: 0 auto;
	height: 100%;
}
</style>

<script>
export default {
  name: 'App'
}
</script>
