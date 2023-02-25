<script>
import CopyVersion from '@/components/CopyVersion.vue';
export default {
    components: {
        CopyVersion,
    }
}
</script>
<template>
    <div class="h-screen w-full md:w-1/2">
        <div class="center w-3/4 md:w-max-3xl px-3">
            <div class="text-sm text-white text-justify">
                Say Hi to your whoever that is with this letter in envelope.
                <br>
                You just Write, Screenshot QR, Send. That person will Scan QR, Click the envelope and the letter will pop.
            </div>
            <a href="/write">
                <div class="bg-cyan-500 hover:bg-cyan-600 text-white duration-400 px-5 relative py-1 rounded-lg my-3 inline-block float-right md:float-left">Write Now!</div>
            </a>
        </div>
        <footer class="mx-2 bottom-10 absolute right-10 opacity-30">
            <CopyVersion />
        </footer>
    </div>
</template>
<style>
.center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
}
</style>