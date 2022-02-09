<template>
  <div class="flex flex-col justify-between h-screen bg-gray-500">
    <app-header />
    <div class="flex items-center justify-center flex-col text-white">
      <img src="../assets/404.png" alt="" />
      <router-link class="rounded bg-gray-400 p-3" to="/"
        >Back To Home</router-link
      >
    </div>
    <app-footer />
  </div>
</template>
