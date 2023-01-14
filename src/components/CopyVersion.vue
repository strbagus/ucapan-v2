<script>
export default {
  data() {
    return {
      version: __APP_VERSION__,
      year: null,
    }
  },
  mounted() {
    this.year = new Date().getFullYear();
  }
}
</script>
<template>
  <footer class="mx-2 bottom-1 absolute right-0">
    <span class="text-gray-100 text-xxs md:text-xs" style="text-shadow: 1px 1px 5px black">
      &copy; {{ year }} <a href="https://github.com/strbagus" title="Github strbagus" class="text-gray-200 font-medium hover:text-white">strbagus</a>, Version {{ version }}
    </span>
  </footer>
</template>

