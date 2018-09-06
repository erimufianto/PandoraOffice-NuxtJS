<template>
  <div>
    <Header/>
        <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/navigation/header-index'
import Footer from '@/components/navigation/footer'

export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<style>

</style>

