<template>
  <app-header />
  <div class="items-center flex flex-col px-5 h-auto bg-gray-500 text-white">
    <h1 class="text-4xl font-bold my-5 text-center">
      {{ user.login }} Github Profile
    </h1>
    <div
      class="flex items-center border rounded-xl w-full sm:w-5/12 p-2 sm:p-5 flex-col sm:flex-row"
    >
      <div class="rounded-full overflow-hidden w-40 h-40">
        <img :src="user.avatar_url" alt="" />
      </div>
      <div class="flex-1 text-center p-0 sm:p-5">
        <div class="text-3xl font-medium my-2">{{ user.name }}</div>
        <div class="flex justify-evenly my-5 font-bold">
          <a
            class="bg-purple-500 rounded-full px-2 mr-1"
            target="_blank"
            :href="'https://github.com/' + user.login + '?tab=followers'"
            >Followers {{ user.followers }}
          </a>
          <a
            class="rounded-full px-2 bg-red-500 mr-1"
            target="_blank"
            :href="'https://github.com/' + user.login + '?tab=following'"
            >Following {{ user.following }}
          </a>
          <a
            class="rounded-full px-2 bg-blue-500"
            target="_blank"
            :href="'https://github.com/' + user.login + '?tab=repositories'"
            >Repos {{ user.public_repos }}
          </a>
        </div>
        <div v-if="user.location" class="flex justify-center items-center mb-6">
          <div class="flex items-center mr-1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 12 16"
              height="18px"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
              ></path>
            </svg>
          </div>
          <span class="text-2xl font-medium">{{ user.location }}</span>
        </div>
        <a
          class="inline-flex hover:overflow-hidden"
          target="_blank"
          :href="user.html_url"
        >
          <div
            class="text-white border p-2 rounded-md cursor-pointer inline-flex items-center"
          >
            <span class="mr-2">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </span>
            View Profile
          </div>
        </a>
      </div>
    </div>
    <div class="text-3xl font-bold my-14">
      Repositories ({{ repos.length }})
    </div>
    <div class="flex w-full justify-center flex-row sm::flex-col flex-wrap">
      <div
        :key="repo"
        v-for="repo in repos"
        class="border-2 border-white rounded-md w-full sm:w-1/4 p-3 flex flex-col items-center bg-gray-700 mr-0 sm:mr-3 mb-3"
      >
        <div class="w-full">
          <div class="flex items-center mb-2">
            <span class="text-xl font-bold">{{ repo.name }}</span>
            <span
              v-if="repo.language"
              class="inline-flex px-3 border rounded-full ml-1.5"
              >{{ repo.language }}</span
            >
            <span v-else class="inline-flex px-3 border rounded-full ml-1.5">
              .MD
            </span>
          </div>
          <div class="mb-2">
            {{ repo.description }}
          </div>
        </div>
        <div class="flex justify-start w-full flex-1 items-end">
          <a
            class="inline-flex border p-2 rounded-lg text-black border-black mr-2 hover:bg-white hover:border-white transition-all"
            target="_blank"
            :href="repo.svn_url"
            >View Repo</a
          >
          <a
            v-if="repo.homepage !== null"
            class="inline-flex border p-2 rounded-lg text-black border-black hover:bg-white hover:border-white transition-all"
            target="_blank"
            :href="repo.homepage"
            >Live Demo</a
          >
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
      repos: null,
    };
  },
  beforeMount() {
    axios
      .get(`https://api.github.com/users/${this.$route.params.user}`)
      .then((response) => {
        this.user = response.data;
      });
    axios(`https://api.github.com/users/${this.$route.params.user}/repos`).then(
      (response) => {
        this.repos = response.data;
      }
    );
  },
};
</script>
