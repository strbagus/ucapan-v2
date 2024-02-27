<script>
import CopyVersion from '@/components/CopyVersion.vue';
export default {
    components: {
        CopyVersion,
    }
}
</script>
<template>
<div class="bg-gradient-to-t md:bg-gradient-to-r from-purple-700 to-indigo-600">
    <div class="h-screen w-full">
        <div class="center w-3/4 md:w-max-2xl px-3">
            <div class="text-sm text-white text-justify">
                Say Hi to your whoever that is with this letter in envelope.
                <br>
                You just Write, Download QR, Send. That person will Scan QR, Click the envelope and the letter will pop.
            </div>
            <a href="/write">
                <div class="bg-sky-500 hover:bg-sky-600 shadow text-white duration-400 px-5 relative py-1 rounded-lg my-3 inline-block float-right md:float-left">Write Now!</div>
            </a>
        </div>
        <footer class="mx-2 bottom-10 absolute left-1/2 opacity-90 footer">
            <CopyVersion />
        </footer>
    </div>
</div>
</template>
<style scoped>
.center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
}
.footer {
    transform: translateX(-50%);
}
</style>
