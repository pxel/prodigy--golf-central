<template>
    <section class="slider-event my-[200px] md:my-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6">
                    <div class="heading mb-[25px]">
                        <span class="text-black block uppercase font-amsterdam text-xl">
                            What's on this week
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="embla">
            <div 
                ref="sliderRef" 
                class="embla__container cursor-grab"
                :class="{ 'cursor-grabbing': isDragging }"
                :style="{ transform: `translateX(-${translateX}%)` }"
                @mousedown="startDrag"
                @mousemove="onDrag"
                @mouseup="endDrag"
                @mouseleave="endDrag"
                @touchstart="startDrag"
                @touchmove="onDrag"
                @touchend="endDrag"
            >
                <div 
                    v-for="(slide, index) in slides" 
                    :key="index"
                    class="embla__slide"
                >
                    <div class="slide relative h-0 pb-[100%] lg:pb-[110%] md:pb-[100%] sm:pb-[90%] xs:pb-[100%] bg-lgray rounded-[20px] overflow-hidden">
                        <div class="top">
                        <div class="date-tag absolute top-0 left-5 bg-black flex flex-col items-center justify-center gap-y-[5px] w-[90px] h-[78px] rounded-b-[10px] z-20">
                            <span class="block text-white text-base leading-[1em] pt-1 font-poppins font-bold">Month</span>
                            <span class="block text-white text-[48px] leading-[40px] font-amsterdam font-bold">XX</span>
                        </div>
                        <div class="image relative h-0 pb-[60%] z-10">
                            <img class="w-full h-full absolute top-0 left-0 object-cover bg-dgray" src="" alt="">
                        </div>
                    </div>
                    <div class="bot pt-[28px] px-[30px]">
                        <span class="block font-poppins text-base font-bold text-dgray">Event category</span>
                        <span class="block font-amsterdam text-lgs text-black uppercase">Event Name</span>
                        <span class="inline-flex bg-dgray rounded-full items-center justify-center gap-x-[4px] px-[5px] py-[2px]">
                            <img src="/public/images/time-icon.svg" alt="">
                            <span class="block font-light text-white text-xs">Time</span>
                        </span>
                    </div>
                    </div>
                </div>



            </div>
        </div>
        
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6">
                    <div class="wrap mt-[25px] flex justify-between items-center">
                        <div class="scroll-bar-container px-4 w-[700px]">
                            <div 
                                ref="scrollBarRef"
                                class="scroll-bar bg-[#d9d9d9] h-[10px] rounded-full relative cursor-pointer"
                                @click="onScrollBarClick"
                                @mousedown="startScrollBarDrag"
                                @mousemove="onScrollBarDrag"
                                @mouseup="endScrollBarDrag"
                                @mouseleave="endScrollBarDrag"
                            >
                                <div 
                                    ref="scrollThumbRef"
                                    class="scroll-progress bg-[#444444] h-full rounded-full transition-all duration-300 relative"
                                    :style="{ width: `${scrollProgress}%` }"
                                >
                                    <div 
                                        class="scroll-thumb absolute right-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#444444] rounded-full cursor-grab"
                                        :class="{ 'cursor-grabbing': isScrollBarDragging }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination flex items-center justify-end gap-[25px]">
                            <button 
                                @click="scrollPrev" 
                                class="nav-btn bg-dgray text-white flex items-center justify-center h-[50px] w-[50px] rounded-full hover:bg-black transition-all duration-300"
                                :disabled="currentSlide === 0"
                            >
                                  <img class="w-[14px] h-[26px] rotate-180" src="/public/images/pag-arrow.svg" alt="">
                            </button>
                            <button 
                                @click="scrollNext" 
                                class="nav-btn bg-dgray text-white flex items-center justify-center h-[50px] w-[50px] rounded-full hover:bg-black transition-all duration-300"
                                :disabled="currentSlide >= maxSlide"
                            >
                            <img class="w-[14px] h-[26px] " src="/public/images/pag-arrow.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sliderRef = ref(null)
const scrollBarRef = ref(null)
const scrollThumbRef = ref(null)
const currentSlide = ref(0)
const isDragging = ref(false)
const isScrollBarDragging = ref(false)
const startX = ref(0)
const startTranslateX = ref(0)
const startScrollBarX = ref(0)
const startScrollProgress = ref(0)

const slides = ref([
    { title: 'Game on #1', image: '' },
    { title: 'Game on #2', image: '' },
    { title: 'Game on #3', image: '' },
    { title: 'Game on #4', image: '' },
    { title: 'Game on #5', image: '' },
    { title: 'Game on #6', image: '' },
    { title: 'Game on #7', image: '' },
])

// Calculate max slide based on total slides and slides per view (29% each)
const maxSlide = computed(() => Math.max(0, slides.value.length - 3.45)) // 100% / 29% ≈ 3.45

// Calculate translateX percentage
const translateX = computed(() => {
    return maxSlide.value > 0 ? (currentSlide.value / maxSlide.value) * 100 : 0
})

// Calculate scroll progress
const scrollProgress = computed(() => {
    // With 7 slides and 3 visible at once, we can scroll through positions
    // Progress should update as we scroll through the content
    const totalSlides = slides.value.length
    const visibleSlides = 3
    const maxScrollPosition = totalSlides - visibleSlides
    
    if (maxScrollPosition <= 0) return 100 // All slides visible
    
    // Calculate progress based on current position vs max scroll position
    const progress = (currentSlide.value / maxScrollPosition) * 100
    return progress
})

const scrollNext = () => {
    if (currentSlide.value < maxSlide.value) {
        currentSlide.value++
    }
}

const scrollPrev = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}

// Drag functionality for slider
const startDrag = (e) => {
    isDragging.value = true
    startX.value = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    startTranslateX.value = currentSlide.value
    document.body.style.userSelect = 'none'
}

const onDrag = (e) => {
    if (!isDragging.value) return
    
    e.preventDefault()
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const diffX = startX.value - currentX
    const slideWidth = 29 // Width of one slide in percentage
    
    const newSlide = Math.round(startTranslateX.value + (diffX / (slideWidth * 2)))
    currentSlide.value = Math.max(0, Math.min(maxSlide.value, newSlide))
}

const endDrag = () => {
    isDragging.value = false
    document.body.style.userSelect = ''
}

// Scroll bar functionality
const onScrollBarClick = (e) => {
    if (isScrollBarDragging.value) return
    
    const rect = scrollBarRef.value.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const barWidth = rect.width
    const progress = (clickX / barWidth) * 100
    
    currentSlide.value = Math.round((progress / 100) * maxSlide.value)
}

const startScrollBarDrag = (e) => {
    isScrollBarDragging.value = true
    startScrollBarX.value = e.clientX
    startScrollProgress.value = scrollProgress.value
    document.body.style.userSelect = 'none'
}

const onScrollBarDrag = (e) => {
    if (!isScrollBarDragging.value) return
    
    e.preventDefault()
    const rect = scrollBarRef.value.getBoundingClientRect()
    const currentX = e.clientX - rect.left
    const barWidth = rect.width
    const progress = Math.max(0, Math.min(100, (currentX / barWidth) * 100))
    
    currentSlide.value = Math.round((progress / 100) * maxSlide.value)
}

const endScrollBarDrag = () => {
    isScrollBarDragging.value = false
    document.body.style.userSelect = ''
}

onMounted(() => {
    // Prevent text selection during drag
    document.addEventListener('selectstart', (e) => {
        if (isDragging.value || isScrollBarDragging.value) {
            e.preventDefault()
        }
    })
})

onUnmounted(() => {
    document.body.style.userSelect = ''
})
</script>

<style scoped>
.embla {
    overflow: visible;
    margin: 0 auto;
    max-width: 1920px;
    padding: 0 250px;
}
@media only screen and (max-width: 1549px) {
    .embla {
        overflow: visible;
        margin: 0 auto;
        max-width: 1920px;
        padding: 0 100px;
    }
}
@media only screen and (max-width: 1199px) {
    .embla {
        overflow: visible;
        margin: 0 auto;
        max-width: 1920px;
        padding: 0 50px;
    }
}

.embla__container {
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
}

.embla__slide {
    flex: 0 0 calc(33.33333333333333% - (40px / 3));
    min-width: 0;
}

.scroll-bar-container {
    max-width: 700px;
}

.nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.nav-btn:not(:disabled):hover {
    transform: scale(1.05);
}

.embla__container {
    user-select: none;
}

.scroll-bar {
    position: relative;
}

.scroll-thumb {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.scroll-thumb:hover {
    transform: translateY(-50%) scale(1.1);
}

@media only screen and (max-width: 991px) {
    .embla {
        overflow: hidden;
        padding: 0 20px;
    }
    
    .embla__slide {
        flex: 0 0 45%;
        min-width: 0;
    }
}

@media only screen and (max-width: 750px) {
    .embla__slide {
        flex: 0 0 90%;
        min-width: 0;
    }
}
</style>