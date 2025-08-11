<template>
    <header class="landing-header h-20 bg-white fixed top-0 left-0 w-full z-[9999]">
        <div class="container h-full">
            <div class="grid-row h-full">
                <div class="col-span-6 h-full">
                    <div class="wrap flex justify-between items-center h-full">
                        <div class="logo">
                            <NuxtLink href="/">
                                <img class="w-[221px] h-auto" src="/public/images/golf-central-header-icon.png" alt="">
                            </NuxtLink>
                        </div>
                        <div class="buttons flex items-center gap-x-[30px] mr-[25px]">
                            <button class="text-white text-base sm:hidden font-poppins font-bold bg-dgray h-[54px] px-[15px] pt-[14px] pb-[12px] min-w-[200px] rounded-full hover:bg-black transition-all duration-300">
                                Book Now
                            </button>
                            <div class="nav-button relative">
                                <button 
                                    @click="toggleNav"
                                    class="flex flex-col items-center h-[38px] w-[44px] relative z-[10000]"
                                >
                                    <span 
                                        ref="line1"
                                        class="block w-[44px] h-[5px] rounded-[10px] bg-dgray transition-all duration-300 absolute top-1/2 translate-y-[-19px]"
                                    ></span>
                                    <span 
                                        ref="line2"
                                        class="block w-[44px] h-[5px] rounded-[10px] bg-dgray transition-all duration-300 absolute top-1/2 -translate-y-1/2"
                                    ></span>
                                    <span 
                                        ref="line3"
                                        class="block w-[44px] h-[5px] rounded-[10px] bg-dgray transition-all duration-300 absolute top-1/2 translate-y-[14px]"
                                    ></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Full Screen Navigation Overlay -->
        <Transition
            @before-enter="onBeforeEnter"
            @after-enter="onAfterEnter"
            @enter="onEnter"
            @leave="onLeave"
            :css="false"
        >
            <div 
                v-if="isNavOpen" 
                ref="navOverlay"
                class="nav-overlay fixed top-0 right-[250px] 3xl:right-[120px] 2xl:right-[100px] lg:right-[50px] md:right-5 w-[474px] h-[494px] xs:right-0 xs:w-full xs:h-screen bg-white z-[9998] py-[25px] rounded-b-[20px]"
            >
                <div class="nav-content h-full flex flex-col justify-start items-start p-[25px]">
                    <div class="close-button absolute right-[25px] top-[25px] z-[10000]" @click="toggleNav">
                        <button class="w-[60px] h-[60px]">
                            <img src="/public/images/close-icon.svg" alt="">
                        </button>
                    </div>
                    <div class="title mb-[10px]">
                        <span class="block text-dgray text-[30px] font-amsterdam uppercase">Tee Up</span>
                    </div>
                    <div class="links flex flex-col gap-y-[16px]">
                        <NuxtLink 
                            href="/game-on" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Game On
                        </NuxtLink>
                        <NuxtLink 
                            href="/lets-play" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Let's Play
                        </NuxtLink>
                        <NuxtLink 
                            href="/pro-shop" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Pro Shop
                        </NuxtLink>
                        <NuxtLink 
                            href="/eat-and-drink" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Eat and Drink
                        </NuxtLink>
                        <NuxtLink 
                            href="/whats-on" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            What's On
                        </NuxtLink>
                        <NuxtLink 
                            href="/functions" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Events
                        </NuxtLink>
                        <NuxtLink 
                            href="/join-the-club" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Join the Club
                        </NuxtLink>
                        <NuxtLink 
                            href="/about-us" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            About Us
                        </NuxtLink>
                        <NuxtLink 
                            href="/contact-us" 
                            class="block text-black text-md font-poppins font-light hover:text-dgray transition-colors duration-300"
                            @click="closeNav"
                        >
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const isNavOpen = ref(false)
const navOverlay = ref(null)
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
}

const closeNav = () => {
    isNavOpen.value = false
}

const onBeforeEnter = (el) => {
    gsap.set(el, { y: "-100%", opacity: 0 })
}

const onAfterEnter = (el) => {
    gsap.set(el, { clearProps: "y, opacity" })
}

const onEnter = (el, done) => {
    const tl = gsap.timeline()
    tl.to(el, { 
        y: "0%", 
        duration: 0.6, 
        ease: "power2.out",
        onComplete: done 
    })
    .to(el, { 
        opacity: 1, 
        duration: 0.4, 
        ease: "power2.out" 
    }, "-=0.3")
}

const onLeave = (el, done) => {
    const tl = gsap.timeline()
    tl.to(el, { 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.in" 
    })
    .to(el, { 
        y: "-100%", 
        duration: 0.5, 
        ease: "power2.in",
        onComplete: done 
    }, "-=0.2")
}
</script>

<style scoped>
.nav-overlay {
    backdrop-filter: blur(10px);
}

.nav-content {
    padding: 0 2rem;
}

@media (max-width: 768px) {
    .nav-content .title span {
        font-size: 40px;
    }
    
    .nav-content .links a {
        font-size: 24px;
    }
}
</style>