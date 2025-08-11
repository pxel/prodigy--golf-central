<template>
    <section class="slider my-[200px] md:my-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6">
                    <div class="heading mb-[25px]">
                        <h1 class="text-black uppercase font-amsterdam text-xl">
                            Game on
                        </h1>
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
                    <div class="slide h-0 relative pb-[139%] bg-gray-300 rounded-lg overflow-hidden">
                        <img class="w-full h-full absolute top-0 left-0 object-cover" :src="slide.image" :alt="slide.title">
                        <div class="content absolute right-[32px] bottom-[32px] flex flex-col items-end">
                            <span class="block text-black font-amsterdam text-xl mb-[18px]">{{ slide.title }}</span>
                            <button class="text-white text-base font-poppins font-bold bg-dgray h-[54px] px-[15px] pt-[14px] pb-[12px] min-w-[200px] rounded-full hover:bg-black transition-all duration-300">
                                Learn more
                            </button>
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
    // Show progress based on how much content is currently visible
    // If showing 3 out of 6 slides = 50% progress
    const totalSlides = slides.value.length
    const visibleSlides = 3
    
    // Calculate what percentage of total content is currently visible
    const progress = (visibleSlides / totalSlides) * 100
    
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