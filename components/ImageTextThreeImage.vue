<template>
    <section class="image-text-three-image my-[200px] md:my-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6" :class="rowReverse ? 'order-1' : 'order-1'">
                    <div class="heading mb-[25px]">
                        <span class="text-black uppercase font-amsterdam text-xl block">
                            Title here
                        </span>
                    </div>
                </div>
                <div class="col-span-3 mb-[100px] md:col-span-6 md:mb-[40px]" :class="rowReverse ? 'order-3' : 'order-2'">
                    <div class="image relative h-0 pb-[94%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover bg-gray-300 rounded-[20px]" src="" alt="">
                    </div>
                </div>
                <div class="col-span-3 mb-[100px] md:col-span-6 md:mb-[40px]" :class="rowReverse ? 'order-2' : 'order-3'">
                    <div class="content h-full flex flex-col justify-center md:pl-0" :class="rowReverse ? 'pl-0' : 'pl-[50px]'">
                        <span class="block text-black text-lg font-poppins mb-[10px]">Headline</span>
                        <p class="text-black font-poppins text-md max-w-[38ch] mb-[10px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <ul class="text-black font-poppins text-md pl-8 list-outside list-disc pb-[10px] mb-[1em]">
                            <li>Incididunt ut labore et dolore magna aliqua</li>
                            <li>Ut enim ad minim veniam, quis nostrud</li>
                            <li>Exercitation ullamco laboris nisi ut aliquip ex </li>
                            <li>Commodo consequat. Duis aute irure dolor in Reprehenderit in voluptate velit esse cillum </li>
                            <li>Dolore eu fugiat nulla pariatur. </li>
                        </ul>
                        <div class="button">
                            <button class="text-white  text-base font-poppins font-bold bg-dgray h-[54px] px-[15px] pt-[14px] pb-[12px] min-w-[200px] rounded-full hover:bg-black transition-all duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 2xs:col-span-6 2xs:mb-[10px]" :class="rowReverse ? 'order-4' : 'order-4'">
                    <div class="image relative h-0 pb-[93%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover bg-gray-300 rounded-[20px]" src="" alt="">
                    </div>
                    <div class="text mt-[20px]" :class="perks ? 'block' : 'hidden'">
                        <span class="block text-black text-lg font-poppins mb-[10px]">Perk 1</span>
                        <p class="text-black font-poppins text-md max-w-[27ch]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>  
                <div class="col-span-2 2xs:col-span-6 2xs:mb-[10px]" :class="rowReverse ? 'order-5' : 'order-5'">
                    <div class="image relative h-0 pb-[93%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover bg-gray-300 rounded-[20px]" src="" alt="">
                    </div>
                    <div class="text mt-[20px]" :class="perks ? 'block' : 'hidden'">
                        <span class="block text-black text-lg font-poppins mb-[10px]">Perk 2</span>
                        <p class="text-black font-poppins text-md max-w-[27ch]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>      
                <div class="col-span-2 2xs:col-span-6 2xs:mb-[10px]" :class="rowReverse ? 'order-6' : 'order-6'">
                    <div class="image relative h-0 pb-[93%]">
                        <img class="w-full h-full absolute top-0 left-0 object-cover bg-gray-300 rounded-[20px]" src="" alt="">
                    </div>
                    <div class="text mt-[20px]" :class="perks ? 'block' : 'hidden'">
                        <span class="block text-black text-lg font-poppins mb-[10px]">Perk 3</span>
                        <p class="text-black font-poppins text-md max-w-[27ch]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
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
    },
    perks: {
        type: Boolean,
        default: false
    }
})
</script>