<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="flex-1">
      <!-- <button class="btn btn-ghost text-xl text-white">MVP Rick and Morty</button> -->
      <router-link to="/" class="btn btn-ghost text-xl text-white">
        MVP Rick and Morty
      </router-link>
    </div>
    <div class="flex-none">
      <!--  <button class="btn btn-ghost text-xl text-white justify-end">About Dev</button> -->
      <router-link to="/aboutdev" class="btn btn-ghost text-xl text-white"> About Dev </router-link>
    </div>
  </div>
</template>
