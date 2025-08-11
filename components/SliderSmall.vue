<template>
    <section class="slider mb-[100px] -mt-[100px] overflow-hidden">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-6">
                    <div class="heading mb-[25px]">
                        <h1 class="text-black font-poppins text-lg">
                            Our Brands
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
                    <div class="slide h-0 relative pb-[100%] bg-gray-300 rounded-lg overflow-hidden">
                        <img class="w-full h-full absolute top-0 left-0 object-cover" :src="slide.image" :alt="slide.title">
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
    { title: 'Game on #8', image: '' },
    { title: 'Game on #9', image: '' },
    { title: 'Game on #10', image: '' },
])

// Calculate max slide based on total slides and slides per view (29% each)
const maxSlide = computed(() => Math.max(0, slides.value.length - 3.45)) // 100% / 29% ≈ 3.45

// Calculate translateX percentage
const translateX = computed(() => {
    return maxSlide.value > 0 ? (currentSlide.value / maxSlide.value) * 100 : 0
})

// Calculate scroll progress
const scrollProgress = computed(() => {
    // With 7 slides and 5 visible at once, we can scroll through positions
    // Progress should update as we scroll through the content
    const totalSlides = slides.value.length
    const visibleSlides = 5
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
    padding: 0 50px;
}

.embla__container {
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
}

.embla__slide {
    flex: 0 0 calc(18.18% - (40px / 5.5));
    min-width: 0;
}

.scroll-bar-container {
    max-width: 700px;
    margin: 0 auto;
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