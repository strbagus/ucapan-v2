<script>
import QRCode from 'qrcode-svg'
export default {
  data() {
    return {
      form: ({
        title: null,
        msg: null,
        background: '#0f0f70',
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
    },

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
        <div id="preview" class="m-1 px-5 py-7 rounded">
          <div class="flex justify-center">
            <div class="message rounded shadow-md pt-3 w-full md:w-1/3 px-5 bg-white">
              <div>
                <input type="text" 
                  class="text-xl text-gray-700 w-full focus:outline-none" 
                  placeholder="e.g. For My Dearest Friend..." 
                  v-model="form.title" maxlength="30">
                <hr>
              </div>
              <p class="text-md text-gray-700 pb-6 pt-4">
                <textarea name="text" wrap="soft" rows="5"
                  class="w-full focus:outline-none h-" 
                  placeholder="e.g. Hi my friend.. we've lot time together, i now i decide to gift some words just for you..."
                  v-model="form.msg" maxlength="250"></textarea>
              </p>
            </div>
          </div>
          <div class="flex justify-end">
            <input type="color" class="form-input text-gray-700 rounded m-1" v-model="form.background" />
          </div>
        </div>
        <div class="flex justify-center my-3 mx-5">
          <button class="bg-blue-600 rounded px-3 py-1 text-white" @click="saveBtn" :disabled="form.msg==null || form.title==null">Done</button>
        </div>
      </div>
      <div id="modal-qr" class="absolute p-5">
        <div class="qr-box bg-red-500">
          <div id="qrcode" class=""></div>
          <p class="text-center my-5 italic">
            For now, you need to screenshot this qrcode and send it to whoever you want
          </p>
          <div class="flex justify-center">
            <button class="bg-blue-600 rounded px-3 py-1 text-white" @click="redirectHome()">Back</button>
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