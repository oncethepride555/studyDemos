<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Header from "./header.vue"
export default { 
  components:{Header},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color: brown;
}
</style>
