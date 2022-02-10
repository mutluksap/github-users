<template>
  <v-pagination
    v-model="page"
    :pages="TotalUsersCount / 4"
    :range-size="10"
    active-color="#f00"
    @update:modelValue="updateHandler"
  />
</template>
<script>
export default {
  props: ["TotalUsersCount"],
  methods: {
    updateHandler($event) {
      this.$emit("count", $event);
    },
  },
};
</script>

<style>
ul.Pagination li button {
  color: #f9f9f9;
}
</style>
