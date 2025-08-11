<template>
    <section class="text-alt my-[200px] md:my-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row !flex" :class="rowReverse ? 'flex-row-reverse' : 'flex-row'">
                <div class="col-span-3">
                    <span class="block text-black text-lgs font-poppins uppercase mb-[20px]">Timeline Item</span>
                    <p class="text-black font-poppins text-md max-w-[38ch]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div class="col-span-3"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    rowReverse: {
        type: Boolean,
        default: false
    }
})
</script>