<script>
export default {
  data() {
    return {
      title: null,
      msg: null,
    }
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let title = urlParams.get('title')
    let message = urlParams.get('msg')
    let bg = urlParams.get('bg')
    this.title = title
    this.msg = message
    document.body.style.background = '#'+bg
  },
}
</script>
<template>
  <div class="about px-2">
    <div class="messages bg-white rounded shadow-lg md:w-1/3 pad py-7 px-5">
      <h1 class="text-2xl text-gray-800">{{ title }}</h1>
      <hr>
      <p class="text-md text-gray-700 pt-5">{{ msg }}</p>
    </div>
  </div>
</template>
<style>
  .about{
    min-height: 100vh;
  }
  .messages{
    position: absolute;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>