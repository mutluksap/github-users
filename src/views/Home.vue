<template>
  <div class="flex flex-col justify-between h-screen bg-gray-500">
    <app-header />
    <div class="text-center">
      <h1 class="h-100 text-white text-4xl">Search Github Profile</h1>
      <div class="my-8 w-full flex items-center justify-center">
        <input
          v-model="searchedUser"
          @keypress.enter="searchUser"
          class="border-gray-700 border-2 rounded w-2/5 bg-transparent p-2 text-white mr-2 focus:outline-none"
          type="search"
          placeholder="Search User..."
        />
        <button @click="searchUser" class="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      <div v-if="isloaderon" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div v-else>{{ users }}</div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchedUser: "",
      isloaderon: false,
      users: null,
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
          });
        this.isloaderon = false;
      }, 1200);
    },
  },
};
</script>
