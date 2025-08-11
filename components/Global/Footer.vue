<template>
    <footer class="footer bg-black py-[100px]">
        <div class="container">
            <div class="grid-row">
                <div class="col-span-3 md:col-span-6 md:mb-[40px]">
                    <div class="wrap">
                        <div class="logo mb-5">
                            <img class="w-[222px] h-auto" src="/public/images/golf-central-footer-icon.png" alt="">
                        </div>
                        <div class="contacts mb-[100px] md:mb-[40px]">
                            <div class="address">
                                <span class="block text-white text-sm font-poppins font-light">40 The Circuit, Skygate.<br></br>Brisbane Airport QLD 4008</span>
                            </div>
                            <div class="number flex items-center">
                                <span class="block text-white text-base font-poppins font-blod">t:</span>
                                <a href="tel:+61730877800" class="block text-white text-sm font-poppins font-light underline">+61 (07) 3087 7800</a>
                            </div>
                            <div class="email flex items-center">
                                <span class="block text-white text-base font-poppins font-blod">e:</span>
                                <a href="mailto:info@golfcentralbne.com.au" class="block text-white text-sm font-poppins font-light underline">info@golfcentralbne.com.au</a>
                            </div>
                        </div>
                        <div class="links grid grid-cols-3 gap-x-5">
                            <div class="col-span-1 2xs:col-span-3 2xs:mb-[40px]">
                                <div class="title">
                                    <span class="block text-dgray text-[30px] font-amsterdam uppercase mb-[10px]">Tee Up</span>
                                </div>
                                <div class="links flex flex-col gap-y-[10px]">
                                    <NuxtLink href="/game-on" class="block text-white text-md font-poppins font-light">Game On</NuxtLink>
                                    <NuxtLink href="/lets-play" class="block text-white text-md font-poppins font-light">Let's Play</NuxtLink>
                                    <NuxtLink href="/pro-shop" class="block text-white text-md font-poppins font-light">Pro Shop</NuxtLink>
                                    <NuxtLink href="/eat-and-drink" class="block text-white text-md font-poppins font-light">Eat & Drink</NuxtLink>
                                    <NuxtLink href="/whats-on" class="block text-white text-md font-poppins font-light">What's On</NuxtLink>
                                    <NuxtLink href="/functions" class="block text-white text-md font-poppins font-light">Events</NuxtLink>
                                    <NuxtLink href="/join-the-club" class="block text-white text-md font-poppins font-light">Join the Club</NuxtLink>
                                </div>
                            </div>
                            <div class="col-span-2 2xs:col-span-3">
                                <div class="title">
                                    <span class="block text-dgray text-[30px] font-amsterdam uppercase mb-[10px]">Golf Central</span>
                                </div>
                                <div class="links flex flex-col gap-y-[10px]">
                                    <NuxtLink href="/about-us" class="block text-white text-md font-poppins font-light">About Us</NuxtLink>
                                    <NuxtLink href="/contact-us" class="block text-white text-md font-poppins font-light">Contact Us</NuxtLink>
                                    <NuxtLink href="/venue-terms" class="block text-white text-md font-poppins font-light">Venue Terms</NuxtLink>
                                    <NuxtLink href="/privacy-policy" class="block text-white text-md font-poppins font-light">Privacy Policy</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-6">
                    <div class="mailing mb-[100px] md:mb-[40px]">
                        <span class="block text-white text-xl font-amsterdam uppercase mb-[10px]">Mailing List Headline</span>
                        <span class="block text-white text-base font-light font-poppins mb-5">Sign up - Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor </span>
                        <span class="block text-white text-md font-poppins font-light mb-5">Email Address</span>
                        <div class="input-wrap flex justify-between items-center border-2 border-dgray rounded-full p-[15px]">
                            <input type="email" name="" id="" placeholder="user@example.com" class="w-full bg-transparent text-white text-md font-poppins placeholder:text-white pl-[10px]">
                            <button class="text-white text-base font-poppins font-bold bg-dgray h-[54px] px-[15px] pt-[14px] pb-[12px] min-w-[200px] lg:min-w-[110px] rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                Sign up
                            </button>
                        </div>
                    </div>
                    <div class="socials">
                        <span class="block text-white text-xl font-amsterdam uppercase mb-[10px]">Social Headling</span>
                        <span class="block text-white text-base font-light font-poppins mb-5">Socials - Lorem ipsum dolor sit amet, consectetur adipiscing  tempor </span>
                    </div>
                    <div class="socials flex gap-x-5">
                        <button>
                            <img src="/images/social-placeholder-icon.svg" alt="">
                        </button>
                        <button>
                            <img src="/images/social-placeholder-icon.svg" alt="">
                        </button>
                        <button>
                            <img src="/images/social-placeholder-icon.svg" alt="">
                        </button>
                        <button>
                            <img src="/images/social-placeholder-icon.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>