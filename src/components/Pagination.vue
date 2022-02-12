<template>
  <v-pagination
    v-model="page"
    :pages="TotalUsersCount < 1020 ? parseInt(TotalUsersCount / 30 + 1) : 34"
    :range-size="5"
    active-color="red"
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
