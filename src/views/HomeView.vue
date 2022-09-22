<script>
import TheWelcome from '../components/TheWelcome.vue'
import QRCode from 'qrcode-svg'
export default {
  components: {
    TheWelcome,
  },
  data() {
    return {
      form: ({
        title: null,
        msg: null,
      }),
    }
  },
  methods: {
    saveBtn() {
      let titleRaw = this.form.title
      let msgRaw = this.form.msg
      let title = encodeURI(titleRaw)
      let msg = encodeURI(msgRaw)

      let link = import.meta.env.VITE_BASE_URL+'message?title='+title+'&msg='+msg
      console.log(link)
      
      var qrcode = new QRCode({
        content: link,
        container: "svg-viewbox",
        join: true 
      })
      var svg = qrcode.svg();
      document.getElementById("qrcode").innerHTML = svg;
    }
  },
}
</script>
<template>
  <main>
    <div class="container mx-auto">
      <div class="bg-red-500">
        <h1 class="text-3xl">{{ form.title }}</h1>
        <p class="text-md">
          {{ form.msg }}<br/>
        </p>
      </div>
      <div class="box-input md:w-1/2 px-5 py-7">
        <h1 class="text-red-500 text-2xl">Form Input</h1>
        <div class="flex flex-col">
          <label for="title">title</label>
          <input type="text" class="form-input mx-5 text-gray-700 rounded p-1" v-model="form.title" />
        </div>
        <div class="flex flex-col">
          <label for="msg">Message</label> 
          <textarea type="text" class="form-input mx-5 text-gray-700 rounded" v-model="form.msg" />
        </div>
        <div class="flex justify-end my-3 mx-5">
          <button class="bg-blue-600 rounded px-3 py-1 text-white" @click="saveBtn" :disable="form.msg==null">Simpan</button>
        </div>
      </div>
      <TheWelcome />
      <div id="qrcode"></div>
    </div>
  </main>
</template>
