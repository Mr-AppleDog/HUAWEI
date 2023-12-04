<template>
<div>
  jhh{{$route.params.param}}
  <el-button @click="hh"></el-button>
</div>
</template>

<script>
export default {
  name: "text",
  methods:{
    hh(){
      console.log(this.$route.query.id)
    }
  }
}
</script>

<style scoped>

</style>
