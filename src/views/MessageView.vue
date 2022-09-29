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
  methods: {
    openEnvelope(){
      // document.getElementById('envelope').style.marginTop = '150px'
      document.querySelector('.envelope').style.webkitAnimationPlayState = 'running'
      document.querySelector('.paper').style.webkitAnimationPlayState = 'running'
      document.querySelector('.top').style.webkitAnimationPlayState = 'running'
    }
  },
}
</script>
<template>
  <div class="container mx-auto">
    <div class="contact">
      <div class="envelope" id="envelope" @click="openEnvelope()">
        <div class="top">
        </div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="cover"></div>
        <div class="paper px-5 py-7">
          <h1 class="text-2xl text-gray-800">{{ title }}</h1>
          <hr>
          <p class="message text-md text-gray-700 pt-5 pb-10">{{ msg }}</p>

        </div>
      </div>
    </div>
  </div>

</template>
<style>
  .container {
    position:relative;
    min-height:100vh;
  }
  .contact {
    position: absolute;
    left: 50%;
    top: 50%;
    width:365px;
    height: 450px;
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
  .contact .envelope {
      position: absolute;
      height: 225px;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #bbbbbb;
      animation: envOpen 2s ease 1s forwards;
      -webkit-animation-play-state: paused;
  }
  @keyframes envOpen {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 75px;
  }
}
  .contact .envelope .top {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 73px;
      z-index: 30;
      overflow: hidden;
      transform-origin: top;

      border-left: 180px solid transparent;
      border-right: 180px solid transparent;
      border-top: 130px solid rgb(244, 244, 244);

      animation: topOpen 1.2s ease .2s forwards;
      -webkit-animation-play-state: paused;
  }
  @keyframes topOpen {
    0% {

    }
    100% {
      z-index: 10;
      transform: scaleY(-1);
    }
  }
  .contact .envelope .bottom {
      position: absolute;
      z-index: 20;
      bottom: 0px;
      left: 3px;
      border-left: 180px solid transparent;
      border-right: 180px solid transparent;
      border-bottom: 111px solid rgb(239, 239, 239);
  }
  .contact .envelope .left {
      position: absolute;
      z-index: 20; top: 0px;
      left: 0px;
      border-left: 180px solid rgb(241, 241, 241);
      border-top: 112px solid transparent;
      border-bottom: 112px solid transparent;
  }
  .contact .envelope .right {
      position: absolute;
      z-index: 20;
      top: 0px;
      right: 0px;
      border-right: 180px solid rgb(240, 240, 240);
      border-top: 112px solid transparent;
      border-bottom: 112px solid transparent;
  }
  .contact .envelope .cover {
      position: absolute;
      z-index: 15;
      bottom: 0px;
      left: 0px;
      height: 51%;
      width: 100%;
      background: rgb(192, 192, 192);
  }
  .contact .envelope .paper {
      position: absolute;
      height: 100px;
      padding-top: 10px;
      top: 5px;
      width: 95%;
      left: 2.5%;
      background: #F9F9F9;
      z-index: 10;
      animation: paperOpen 2.7s ease 1.5s forwards;
      -webkit-animation-play-state: paused;
  }
  @keyframes paperOpen {
    0% {
      margin-top: 0px;
      min-height: 180px;
    }
    50% {
      margin-top: -250px;
      z-index: 30;
      min-height: 190px;
      box-shadow: 0 0 5px 1px rgba(158, 158, 158, 0.5);
    }
    100% {
      min-height: 205px;
      margin-top: -75px;
      z-index: 30;
      box-shadow: 0 0 10px 1px rgba(158, 158, 158, 0.5);
    }
  }
  .contact .envelope .paper a {
      position: relative;
      display: block;
      font-size: 14px;
      margin: 5px;
      margin-bottom: 0px;
      text-align: center;
      color: rgb(215, 215, 215);
      text-decoration: none;
  }
  .contact .envelope .paper a.call .i {
      position: absolute;
      top: 2px;
      left: 20px;
      display: inline-block;
      width: 3px;
      height: 5px;
      border-width: 5px 0 5px 2px;
      border-style: solid;
      border-color: rgb(213, 213, 213);
      background: transparent;
      transform: rotate(-30deg);
      border-top-left-radius: 3px 5px;
      border-bottom-left-radius: 3px 5px;
  }
  .contact .envelope .paper a {
      color: #333;
      transition: color 200ms;
  }
  .contact .envelope .paper a.mail .i {
      position: absolute;
      top: 0px;
      left: 17px;
      display: inline-block;
      font-size: 13px;
      font-weight: bold;
  }
</style>