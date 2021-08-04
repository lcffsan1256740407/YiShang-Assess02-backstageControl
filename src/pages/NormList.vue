<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "NormList",
  data() {
    return {};
  },
  mounted() {
    this.$router.replace({
      name: "list",
      query: {
        bigtitle: "用户列表",
        smalltitle: "列表查询",
      },
    });
  },
};
</script>


<style scoped>
</style>
