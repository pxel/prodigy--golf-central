<template>
    <section class="text-image-split my-[200px]  md:my-[100px] overflow-hidden" :class="rowReverse ? ' !mt-[100px] -mb-[100px] md:mb-[100px]' : '!my-[100px]'">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-3 md:col-span-6 md:mb-[40px]" :class="rowReverse ? 'order-2 pl-[50px] md:pl-0 md:pt-[40px]' : 'order-1 md:order-2 md:pt-[40px]'">
                    <div class="content h-full flex flex-col justify-center">
                        <h3 class="text-black font-amsterdam leading-[1.05em] text-xl">Gift Cards</h3>
                        <h3 class="text-dgray font-amsterdam leading-[1.05em] text-xl">Mini-Golf</h3>
                        <h3 class="text-dgray font-amsterdam leading-[1.05em] text-xl mb-[50px] lg:mb-[10px]">Games and Leaderboards</h3>
                        <p class="text-black font-poppins text-md max-w-[38ch] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-6" :class="rowReverse ? 'order-1' : 'order-2 md:order-1'">
                    <div class="image relative h-0 pb-[94%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover bg-gray-300" src="" alt="">
                    </div>
                </div>
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