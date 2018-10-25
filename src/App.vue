<template>
  <div id="app">
		<v-header></v-header>
		<router-view></router-view>
		<v-footer></v-footer>
  </div>
</template>

<script>

import vFooter from './components/footer'
import vHeader from './components/header'
export default {
	name: 'App',
	components: {
		vFooter,
		vHeader
	}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
	width: 100%;
}
#header{
	margin-bottom:20px;
}
</style>
