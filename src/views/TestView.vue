<script>
    export default {
      data() {
        return {
          title: 'Lorem Ipsum Title',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.',
        }
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