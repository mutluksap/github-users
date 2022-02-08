<template>
  <app-header />
  <span>{{ user }}</span>
  <app-footer />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
    };
  },
  beforeMount() {
    axios
      .get(`https://api.github.com/search/users?q=${this.$route.params.user}`)
      .then((response) => {
        let res = response.data.items.find((user) => {
          return user.login.toLowerCase() == this.$route.params.user;
        });
        this.user = res;
      });
  },
};
</script>
