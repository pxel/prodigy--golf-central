
<template>
  <div>
    <Header />
      <slot></slot>
    <Footer />
  </div>
</template>


<script>
import Header from '~/components/global/Header.vue'
import Footer from '~/components/global/Footer.vue'
</script>