<template>
  <div>
    <div class="carous">

      <div class="container">
        <splide :options="options">
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img3.jpg">
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'Acceuil',
  data () {
    return {
      options: {

      }
    }
  },
  components: {
    Splide,
    SplideSlide,
  },

}
  

</script>

<style scoped>

.carous {
  background:#F39F8C;
}

.image img {
	width : 100%;
	height: 100%;
  max-height: 95%;
}
</style>