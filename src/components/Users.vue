<template>
  <div class="flex flex-col items-center justify-center">
    <app-pagination
      @count="changeUsers"
      :TotalUsersCount="usersCount"
      v-if="allUsers !== null"
    ></app-pagination>
    <div
      class="flex flex-wrap px-10 w-full justify-center mt-5 flex-col sm:flex-row"
    >
      <app-user :user="user" :key="user" v-for="user in allUsers"></app-user>
    </div>
  </div>
</template>

<script>
import User from "./User";
import Pagination from "./Pagination.vue";
export default {
  props: ["allUsers", "usersCount"],
  components: {
    appUser: User,
    appPagination: Pagination,
  },
  methods: {
    changeUsers($event) {
      this.$emit("selectedPage", $event);
    },
  },
};
</script>
