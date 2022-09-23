<script>
import QRCode from 'qrcode-svg'
export default {
  data() {
    return {
      form: ({
        title: null,
        msg: null,
        background: '#0000ff',
      }),
    }
  },
  mounted() {
    document.getElementById("preview").style.background = this.form.background  
  },
  methods: {
    saveBtn() {
      var qrcode = new QRCode({
        content: this.getLink(),
        container: "svg-viewbox",
        join: true 
      })
      var svg = qrcode.svg()
      document.getElementById("qrcode").innerHTML = svg
      document.getElementById("modal-qr").style.visibility = 'visible'
      console.log(this.getLink())
    },
    getLink() {
      let titleRaw = this.form.title
      let msgRaw = this.form.msg
      let bgRaw = this.form.background
      let bg = bgRaw.replace('#', '')
      let title = encodeURI(titleRaw)
      let msg = encodeURI(msgRaw)
      return import.meta.env.VITE_BASE_URL+'message?title='+title+'&msg='+msg+'&bg='+bg
    },
    backgroundColor(value){
      document.getElementById("preview").style.background = value
    },
    redirectHome(){
      document.getElementById("modal-qr").style.visibility = 'hidden'
    }
  },
  watch: {
    'form.background': function (newVal) {
      this.backgroundColor(newVal)
    },
  },
}
</script>
<template>
  <main>
    <div>
      <div class="form absolute px-5">
        <h1 class="text-2xl text-yellow-500 mt-7">Preview</h1>
        <div id="preview" class="m-1 px-5 pt-7 rounded">
          <div class="message rounded shadow-md pt-3 px-2 bg-white">
            <div v-if="form.title!=null">
              <h1 class="text-2xl text-gray-700">{{ form.title }}</h1>
              <hr>
            </div>
            <p class="text-md text-gray-700 pb-6 pt-4">
              {{ form.msg }}<br/>
            </p>
          </div>
          <p class="text-end py-2">{{ form.background }}</p>
        </div>
        <div class="box-input md:w-1/2 py-7">
          <h1 class="text-red-500 text-2xl">Form Input</h1>
          <div class="flex flex-col">
            <label for="title">title</label>
            <input type="text" class="form-input text-gray-700 rounded p-1" v-model="form.title" />
          </div>
          <div class="flex flex-col">
            <label for="msg">Message</label> 
            <textarea type="text" class="form-input text-gray-700 rounded" v-model="form.msg" required/>
          </div>
          <div class="flex flex-col">
            <label for="title">Background Color</label>
            <input type="color" class="form-input text-gray-700 rounded p-1" v-model="form.background" />
          </div>
          <div class="flex justify-end my-3 mx-5">
            <button class="bg-blue-600 rounded px-3 py-1 text-white" @click="saveBtn" :disabled="form.msg==null">Simpan</button>
          </div>
        </div>
      </div>
      <div id="modal-qr" class="absolute p-5">
        <div class="qr-box bg-red-500">
          <div id="qrcode" class=""></div>
          <p class="text-center my-5 italic">
            maaf programmer nya cupu gabisa convert ext .svg ke .jpg/.png jadi screenshot dulu ya
          </p>
          <div class="flex justify-center">
            <button class="bg-blue-600 rounded px-3 py-1 text-white" @click="redirectHome()">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
  #modal-qr{
    height: 100vh;
    width: 100%;
    background: rgba(14, 14, 14, 0.9);
    visibility: hidden;
    
  }
  .form{
    width: 100%;
    min-height: 100vh;
  }
  .qr-box{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    max-height: 300px;
  }
</style>