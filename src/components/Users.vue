<template>
  <div class="flex flex-col items-center justify-center">
    <app-pagination></app-pagination>
    <div class="flex flex-wrap px-48 w-full justify-center">
      <app-user :user="user" :key="user" v-for="user in allUsers"></app-user>
    </div>
  </div>
</template>

<script>
import User from "./User";
import Pagination from "./Pagination.vue";
export default {
  props: ["allUsers"],
  components: {
    appUser: User,
    appPagination: Pagination,
  },
};
</script>
