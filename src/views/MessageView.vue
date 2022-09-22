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
    this.title = title
    this.msg = message
    console.log(title + message)
  },
}
</script>
<template>
  <div class="about">
    <h1 class="text-3xl text-yellow-500">{{ title }}</h1>
    <h1 class="text-xl text-red-500">{{ msg }}</h1>
  </div>
</template>
