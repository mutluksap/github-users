<template>
  <div class="flex flex-col justify-between h-screen bg-gray-500">
    <app-header />
    <div class="text-center">
      <h1 class="h-100 text-white text-4xl mt-2">Search Github Profile</h1>
      <div
        class="my-8 w-full flex items-center justify-center flex-col sm:flex-row"
      >
        <input
          v-model="searchedUser"
          @input="removeResult"
          @keypress.enter="searchUser"
          class="border-gray-700 border-2 rounded w-5/6 mb-2 sm:mb-0 sm:w-2/5 bg-transparent p-2 text-white mr-2 focus:outline-none"
          type="search"
          placeholder="Search User..."
        />
        <button
          @click="searchUser"
          class="p-3 sm:py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
      <div v-if="isloaderon" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="h-auto bg-gray-500" v-else>
        <app-users
          @selectedPage="showSelectedPage"
          :searcUserKeys="searchedUser"
          :usersCount="totalUsersCount"
          :allUsers="users"
        ></app-users>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";
import Users from "../components/Users.vue";
export default {
  components: {
    appUsers: Users,
  },
  data() {
    return {
      searchedUser: "",
      isloaderon: false,
      users: null,
      totalUsersCount: null,
    };
  },
  methods: {
    searchUser() {
      this.isloaderon = true;
      setTimeout(() => {
        axios
          .get(`https://api.github.com/search/users?q=${this.searchedUser}`)
          .then((response) => {
            this.users = response.data.items;
            this.totalUsersCount = response.data.total_count;
          });
        this.isloaderon = false;
      }, 1000);
    },
    showSelectedPage($event) {
      axios
        .get(
          `https://api.github.com/search/users?q=${this.searchedUser}&page=${$event}`
        )
        .then((response) => {
          this.users = response.data.items;
        });
    },
    removeResult() {
      this.users = null;
    },
  },
};
</script>
