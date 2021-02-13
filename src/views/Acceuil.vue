<template>
  <div class="fond">
    <!-- Gestion du carousel -->
    <div class="carous mt-4">
      <div class="container">
        <splide :options="options">
          <splide-slide class="image">
            <img src="../assets/carousel/image1.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/image2.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/image3.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg">
          </splide-slide>
        </splide>
      </div>
    </div>
    <!-- Engagement -->
    <div class="container-fluid mt-4 mb-4">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-5 mb-3">
          <div class="card">
            <div class="card-header couleurCard">
              <h2>Engagement</h2>
            </div>
            <div class="card-body">
              <h3>Déplacement rapide et gratuit</h3>
              <p>Réponse à votre demande en 1h par mail ou téléphone</p>
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-5 mb-3">
          <div class="card">
            <div class="card-header couleurCard">
              <h2>Conseil</h2>
            </div>
            <div class="card-body">
              <h3>Conseil et suivi des interventions</h3>
              <p>Hotline gratuite après réparation</p>
            </div>
          </div>
        </div>
      </div>
      <!-- horaire et information du site -->
      <div class="container-fluid mt-4 mb-4">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-4 mb-3">
          <div class="card">
            <div class="card-header couleurCard">
              <h2>Horaire</h2>
            </div>
            <div class="card-body">
              <h3>Horaire magasin</h3>
              <ul>
                <li>Lundi 14h à 19h</li>
                <li>Mardi 8h30 à 12h</li>
                <li>mercredi 13h30 à 19h</li>
                <li>Vendredi 14h à 19h</li>
              </ul>
              <h3>Horaire intervention sur site</h3>
              <ul>
                <li>Du lundi au vendredi</li>
                <li>De 9h à 19h</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-4 mb-3">
          <div class="card">
            <div class="card-header couleurCard">
              <h2>Magasin</h2>
            </div>
            <div class="card-body">
              <p>21 Rue du Vieux Pont</p>
              <p>49290 Chalonnes-sur-Loire</p>
              <img class="magasin" src="../assets/FaceMagasins.jpg" alt="photo du magasin de Chalonnes">
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-4 mb-3">
          <div class="card">
            <div class="card-header couleurCard">
              <h2>Localisation</h2>
            </div>
            <div class="card-body">
              <div class="embed-responsive-21by9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173070.15612684467!2d-0.8635889318464071!3d47.32955139314257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48062ec108150759%3A0x62954f8388632878!2s21%20Rue%20du%20Vieux%20Pont%2C%2049290%20Chalonnes-sur-Loire!5e0!3m2!1sfr!2sfr!4v1612596557953!5m2!1sfr!2sfr" width="500" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        height: '500px',
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
.fond {
  background: #F7F7F7;
}

ul {
  list-style-type: none;
}
.image img {
	width : 100%;
	height: 100%;
  max-height: 95%;
}
.magasin {
  width: 380px;
}
.couleurCard {
  background: #343A40;
  color: #fff;
}
</style>