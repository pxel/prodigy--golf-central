<template>
    <section class="hero relative min-h-screen h-full md:min-h-[800px]">
        <div class="bg-image">
            <img class="bg-gray-300 h-full w-full absolute top-0 left-0" src="" alt="">
        </div>
        <div class="container h-screen md:h-[800px]">
            <div class="grid-row h-full">
                <div class="col-span-6 h-full">
                    <div class="wrap flex flex-col justify-between h-full">
                        <div class="heading h-full mt-[420px] md:mt-[200px]">
                            <h1 class="text-black text-center font-amsterdam text-2xls">HERO COPY HERE</h1>
                        </div>
                        <div class="bot-nav bg-dgray p-8 md:p-5 flex justify-between items-center rounded-[20px] mb-[60px]">
                            <div class="grid grid-cols-6 gap-x-[10px] w-full">
                                <div class="col-span-3 md:col-span-6 md:mb-[20px]">
                                    <div class="left flex justify-between 2xl:flex-col 2xl:gap-y-[20px] 2xl:h-full">
                                        <div class="text flex-col">
                                            <span class="block text-white text-base font-poppins font-bold">Plan your visit to Golf Central</span>
                                            <span class="block text-white text-base font-poppins">40 The Cct, Brisbane Airport QLD 4008</span>
                                        </div>
                                        <div class="drop-down-nav mr-[60px] md:mr-0 relative">
                                            <img class="absolute top-1/2 -translate-y-1/2 right-[25px]" src="/public/images/drop-down.svg" alt="">
                                            <select class="bg-white rounded-[10px] text-base font-poppins text-lgray2 h-[50px] w-[250px] 2xl:w-full px-[25px] appearance-none" name="" id="">
                                                <option value="">Play Bays</option>
                                                <option value="">Play Bays</option>
                                                <option value="">Play Bays</option>
                                                <option value="">Play Bays</option>
                                                <option value="">Play Bays</option>
                                                <option value="">Play Bays</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-3 md:col-span-6">
                                    <div class="wrap flex justify-between 2xl:flex-col 2xl:gap-y-[20px]">
                                        <div class="days">
                                            <div class="tabs flex gap-x-[25px] md:gap-x-[10px]">
                                                <button 
                                                    v-for="(day, index) in days" 
                                                    :key="day.name"
                                                    @click="activeDay = index"
                                                    :class="[
                                                        'tab-btn text-white text-base uppercase font-poppins',
                                                        activeDay === index ? 'font-bold underline underline-offset-2' : ''
                                                    ]"
                                                >
                                                    {{ day.name }}
                                                </button>
                                            </div>
                                            <div class="time-display mt-[10px]">
                                                <span class="text-white text-sm font-poppins">{{ days[activeDay].time }}</span>
                                            </div>
                                        </div>
                                        <div class="buttons flex gap-x-[10px]">
                                            <button class="text-black text-base font-poppins font-bold bg-lgray h-[54px] px-[15px] pt-[14px] pb-[12px] min-w-[200px] rounded-full hover:bg-black hover:text-white transition-all duration-300">
                                                Plan a visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeDay = ref(0)

const days = ref([
    { name: 'Mon', time: '7am - 9pm' },
    { name: 'Tue', time: '10am - 9pm' },
    { name: 'Wed', time: '9am - 9pm' },
    { name: 'Thu', time: '3am - 9pm' },
    { name: 'Fri', time: '5am - 9pm' },
    { name: 'Sat', time: '8am - 10pm' },
    { name: 'Sun', time: '8am - 8pm' }
])
</script>