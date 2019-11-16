<template>
  <div>
    <!-- <h1>当前数量为：{{ $store.state.count }}</h1> -->
    <h1>{{ $store.getters.strfun }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>

<style lang="scss" scoped>

</style>