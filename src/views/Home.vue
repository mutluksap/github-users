<template>
  <div class="flex flex-col justify-between h-screen bg-gray-500">
    <app-header />
    <div>
      <h1 class="h-100 text-white text-center text-4xl">
        Search Github Profile
      </h1>
      <div class="text-center mt-8 w-full flex items-center justify-center">
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
    </div>
    <v-pagination
      v-model="page"
      :pages="10"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler"
    />
    <app-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchedUser: "",
      page: 20,
    };
  },
  methods: {
    searchUser() {
      alert(this.searchedUser);
    },
  },
};
</script>
