<template>
    <section class="faq my-[200px] md:my-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6">
                    <div class="accordion">
                        <div 
                            v-for="(item, index) in faqItems" 
                            :key="index"
                            class="accordion-item p-[25px] bg-lgray rounded-[20px] mb-[20px]"
                        >
                            <div 
                                class="accordion-item-header flex items-center justify-between cursor-pointer"
                                @click="toggleAccordion(index)"
                            >
                                <span class="block text-black text-lgs font-poppins">
                                    {{ item.title }}
                                </span>
                                <img 
                                    src="/public/images/faq-arrow.svg" 
                                    alt=""
                                    class="transition-transform duration-300"
                                    :class="{ 'rotate-180': openAccordions.includes(index) }"
                                >
                            </div>
                            <Transition
                                @before-enter="onBeforeEnter"
                                @after-enter="onAfterEnter"
                                @enter="onEnter"
                                @leave="onLeave"
                                :css="false"
                            >
                                <div 
                                    v-if="openAccordions.includes(index)" 
                                    class="accordion-content overflow-hidden"
                                >
                                    <p class="text-md text-black font-poppins mt-[20px]">
                                        {{ item.content }}
                                    </p>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const openAccordions = ref([])

const faqItems = ref([
    {
        title: 'Frequently Asked Question 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        title: 'Frequently Asked Question 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        title: 'Frequently Asked Question 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
])

const toggleAccordion = (accordionIndex) => {
    const index = openAccordions.value.indexOf(accordionIndex)
    if (index > -1) {
        openAccordions.value.splice(index, 1)
    } else {
        openAccordions.value.push(accordionIndex)
    }
}

const onBeforeEnter = (el) => {
    gsap.set(el, { height: "auto", opacity: 1 })
}

const onAfterEnter = (el) => {
    gsap.set(el, { clearProps: "height, opacity" })
}

const onEnter = (el, done) => {
    const tl = gsap.timeline()
    tl.from(el, { height: 0, duration: 0.3, ease: "power2.inOut" })
      .from(el, { opacity: 0, duration: 0.3 * 0.5, ease: "linear", onComplete: done }, `-=${0.3/2}`)
}

const onLeave = (el, done) => {
    const tl = gsap.timeline()
    tl.to(el, { opacity: 0, duration: 0.3 * 0.5, ease: "linear"})
      .to(el, { height: 0, duration: 0.3, ease: "power2.inOut", onComplete: done }, `-=${0.3/2}`)
}
</script>