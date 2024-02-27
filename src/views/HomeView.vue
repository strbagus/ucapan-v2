<script setup>
import { reactive, ref, onMounted, watch, computed } from 'vue';
import QRCode from 'qrcode-svg';
import { RouterLink } from 'vue-router';
import CopyVersion from '@/components/CopyVersion.vue';
import { saveAs } from 'file-saver';

const form = reactive({
  msg: '',
})
const isQr = ref(false)
const qrCode = ref('')

onMounted(() => {
  document.body.style.background = `linear-gradient(90deg, ${background.one} 0%, ${background.two} 100%)`;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.get('msg') !== null) {
    form.msg = atob(urlParams.get('msg'))
    background.one = '#'+urlParams.get('bo')
    background.two = '#'+urlParams.get('bt')
  }
})

const saveBtn = () => {
  var qrcode = new QRCode({
    content: fullLink(),
    container: "svg-viewbox",
    join: true
  })
  var svg = qrcode.svg()
  qrCode.value = svg
  isQr.value = true
}

const background = reactive({
  one: '#4A3498',
  two: '#B300AA'
})

watch(background, (newVal) => {
  document.body.style.background = `linear-gradient(45deg, ${newVal.one} 0%, ${newVal.two} 100%)`;
})

const fullLink = (preview = false) => {
  let base = !preview ? import.meta.env.VITE_BASE_URL : ''
  let prv = preview ? '&preview=true' : ''
  return encodeURI(`${base}/message?bo=${background.one.replace('#','')}&bt=${background.two.replace('#','')}&msg=${btoa(form.msg)}${prv}`)
};

const textCounter = computed(() => {
  return form.msg.length
});

const downloadQR = () => {
  if (!qrCode.value) {
    console.warn('No QR code generated yet. Please generate it first.');
    return;
  }

  const blob = new Blob([qrCode.value], { type: 'image/svg+xml' });
  saveAs(blob, 'qr-code.svg'); // Replace with desired filename
};
</script>
<template>
  <div class="form px-5 absolute max-w-4xl">
    <h1 class="text-2xl text-yellow-500 mt-7">Preview</h1>
    <div id="preview" class="m-1 px-5 py-7 rounded">
      <div class="flex justify-center">
        <div class="message rounded shadow-md pt-3 w-full md:max-w-md px-5 bg-white">
          <p class="text-md text-gray-700 pb-6 pt-4">
            <textarea name="text" wrap="soft" rows="6" class="w-full focus:outline-none h-"
              placeholder="e.g. Hi my friend.. we've lot time together, i now i decide to gift some words just for you..."
              v-model="form.msg" maxlength="300"></textarea>
          </p>
          <div class="text-gray-600 mb-2 text-end">
            {{ textCounter }}
            <span>/ 300</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <input type="color" class="form-input text-gray-700 rounded m-1" v-model="background.one" />
        <input type="color" class="form-input text-gray-700 rounded m-1" v-model="background.two" />
      </div>
    </div>
    <div class="flex justify-center my-3 mx-5">
      <button
        class="bg-yellow-500 rounded px-3 py-1 text-white hover:bg-yellow-600 duration-300 disabled:bg-yellow-600 disabled:text-gray-500"
        @click="saveBtn" :disabled="form.msg == ''">Done</button>
    </div>
    <footer class="mx-2 bottom-1 absolute right-10 opacity-30">
      <CopyVersion />
    </footer>
  </div>
  <div v-show="isQr" id="modal-qr" class="absolute p-5">
    <div class="qr-box">
      <div v-html="qrCode"></div>
      <p class="text-center my-5 italic text-white">
        Download this QRCode and send to your special person. 
      </p>
      <div class="flex justify-evenly">
        <router-link :to="fullLink(true)"
          class="bg-yellow-500 hover:bg-yellow-600 rounded px-3 py-1 text-white">Preview</router-link>
        <button class="bg-yellow-500 hover:bg-yellow-600 rounded px-3 py-1 text-white" @click="isQr = !isQr">Back</button>
        <button class="bg-neutral-500 hover:bg-neutral-600 rounded px-3 py-1 text-white" @click="downloadQR">Download QR</button>
      </div>
    </div>
  </div>
</template>
<style>
#modal-qr {
  height: 100vh;
  width: 100%;
  background: rgba(14, 14, 14, 0.9);

}

.form {
  width: 100%;
  min-height: 100vh;
  left: 50%;
  transform: translateX(-50%);
}

.qr-box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  max-height: 300px;
}
</style>
