<template>
  <div class="fond">
    <!-- Début caroussel versio desktop -->
    <div class="container-fluid depart pt-5 desktop">
      <div class="carousel_wrapper">
        <div class="carousel">
          <div class="slide one">
            <img src="../assets/carousel/image1.jpg" alt="Thomas dans l'entrée de son magasin de Chalonnes sur loire" />
          </div>
          <div class="slide two">
            
          </div>
          <div class="slide three">
            <img src="../assets/carousel/image2.jpg" alt="microrepaire en cours de maintenance sur des PC" />
          </div>
          <div class="slide four">
            
          </div>
          <div class="slide five">
            <img src="../assets/carousel/image3.jpg" alt="Démontage d'un PC portable dans le magasin proche d'Angers" />
          </div>
          <div class="slide six">
            
          </div>
          <div class="slide seven">
            <img src="../assets/carousel/img4.jpg" alt="Plaquette du magasin Microrepaire" />
          </div>
          <div class="slide eight">
            
          </div>
          <div class="slide nine">
            
          </div>
        </div>
      </div>
    </div>
    <!-- Fin du carousel version desktop -->
    <!-- Début du carousel mobile -->
    <div class="carous  pt-5 ml-auto mr-auto mobile">
      <div class="container-fluid">
        <splide :options="options">
          <splide-slide class="image">
            <img src="../assets/carousel/image1.jpg" alt="Thomas dans l'entrée de son magasin de Chalonnes sur loire" title="photo de Thomas Microrepaire">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/image2.jpg" alt="microrepaire en cours de maintenance sur des PC">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/image3.jpg" alt="Démontage d'un PC portable dans le magasin proche d'Angers">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg" alt="Plaquette du magasin Microrepaire">
          </splide-slide>
          <splide-slide class="image">
            <img src="../assets/carousel/img4.jpg" alt="idem de l'image précédente">
          </splide-slide>
        </splide>
      </div>
    </div>
    <!-- Fin caroussel mobile -->
    <!-- Engagement -->
    <div class="container-fluid mt-4">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-5 mb-3">
          <div class="card shadow-lg rounded">
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
          <div class="card shadow-lg rounded">
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
      <div class="container-fluid mt-4 pb-4">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-4 mb-3">
          <div class="card shadow-lg rounded">
            <div class="card-header couleurCard">
              <h2>Horaires</h2>
            </div>
            <div class="card-body">
              <h3>Horaires du magasin</h3>
              <ul>
                <li>Lundi 14h à 19h</li>
                <li>Mardi 8h30 à 12h</li>
                <li>Mercredi 13h30 à 19h</li>
                <li>Vendredi 14h à 19h</li>
              </ul>
              <h3>Horaires d'intervention à domicile ou sur site</h3>
              <ul>
                <li>Du lundi au vendredi</li>
                <li>De 9h à 19h</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-4">
          <div class="card shadow-lg rounded">
            <div class="card-header couleurCard">
              <h2>Magasin</h2>
            </div>
            <div class="card-body">
              <p>21 Rue du Vieux-Pont</p>
              <p>49290 Chalonnes-sur-Loire</p>
              <img class="magasin" src="../assets/devant.jpg" alt="photo du magasin de Chalonnes" title="Photo du magasin microrepaire de Chalonnes sur loire">
            </div>
          </div>
        </div>
        <div class="col-md-10 col-lg-4">
          <div class="card shadow-lg rounded">
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
        height: '400px',
        width: '1024px',
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
.depart {
  height: 600px;
}
.mobile {
  display: none;
}

/*:-moz-any-link.fond {
  background: #F7F7F7;
}*/

/* Début du CSS pour le carroussel */

*, *::before, *::after {
  box-sizing: border-box; /* Too much math below to be concerned with standard CSS Box Model element dimensions calculations. Let's not have to account for padding/margins/borders on anything here. */
}


.carousel_wrapper {
  position: relative;
  width: 320px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(-360deg) translateZ(-400px); /* add reverse transformation from the slides */
  animation: swirl 40s steps(10000, end) infinite; /* run `swirl` animation (defined at end of CSS) infitely, with animation lasting 40 seconds, and 10,000 steps between the FROM and TO values in the animation for a smooth rotation */
}

.slide {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 300px;
  height: 187px;
}

.slide img {
  width: 350px;
  height: 218px;
  border: 3px inset rgba(47, 115, 201, 0.75);
  box-shadow: 0 0 15px 3px rgba(110, 72, 221, 0.9);
}


/*
9 Slides total: 360 Degrees (full circle) --> 360/9 = 40 --> our increment for rotation

Some math. Consider how the carousel will be set up. It's going to be a 3D circle, like an orbit. The orientation will be such that it would be like setting a ring down on a table, then bending down and looking at the ring head on from the edge of the table. The main "front" image will be entirely front-facing. The other images will be rotated slightly to make a full circle. You could sketch this out in 2D from a bird's eye view, and you'd end up with a picture like the following:

https://cl.ly/image/2P3E1U0W0c29

Each triangle/piece would be a slide, hence 9 pieces. That being said, let's do some calculations, but we'll use the dimensions of our elements rather than those in the picture.

So, we're rotating all the slides in 40º increments relative to each other, because 360º makes a full circle, and we have 9 elements: 360/9 = 40

In the picture above, we want to find the radius of the circle (which isn't exactly a circle because it's made up of triangles). So we can cut each triangle in half and solve for `r` (radius). We can solve for `r` using some geometry and our own elements' dimensions. 

The width of the slides is 300px. We're going to split those triangles in half and use the TANGENT function in geometry/trigonemty to solve for `r`. And since we're splitting each of the 9 triangles (the slides) in half for this, we need to account for the fact that our key angle is now going to be 20º and not 40º. We can solve for `r` by taking our smaller triangles' width (150px) and dividing by the tangent of 20º (in degrees, not radians). So:

            150
   r =  -----------
          tan(20º)

Here's a screenshot of me doing the calculations in JavaScript, right in the browser console!

Math things: https://cl.ly/image/1t0j1V2Y2l2Z

So, `r` is (about) 412px long! This means we need to TRANSLATE the slides in the Z 3-dimensional plane by 412px. This should be done AFTER the rotateY transformation.
*/

.slide.one {
  transform: rotateY(0deg) translateZ(400px);
}
.slide.two {
  transform: rotateY(45deg) translateZ(400px);
}
.slide.three {
  transform: rotateY(90deg) translateZ(400px);
}
.slide.four {
  transform: rotateY(135deg) translateZ(400px);
}
.slide.five {
  transform: rotateY(180deg) translateZ(400px);
}
.slide.six {
  transform: rotateY(225deg) translateZ(400px);
}
.slide.seven {
  transform: rotateY(270deg) translateZ(400px);
}
.slide.eight {
  transform: rotateY(315deg) translateZ(400px);
}
/*.slide.nine {
  transform: rotateY(320deg) translateZ(412px);
}*/

/*
CSS3 ANIMATION
-------------------
Simply rotates the carousel around the Y axis by using rotateY and starting at initial value, -360º, and going to final value 0º, then resetting.
*/

@keyframes swirl {   
  from {
    transform: rotateY(-360deg);
  }
  to {
    transform: rotateY(0deg);
  }
} 


/*Fin du CSS pour le carroussel */



.fond {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgb(240, 244, 247) 100%);
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
iframe {
  width: 100%;
}
.magasin {
  width: 100%;
}

@media (max-width: 1200px) {
.desktop {
  display: none;
}
.mobile {
  display: initial;
}

h2 {
  font-size: 3.5vh;
}
.image img {
	width : 100%;
	height: 100%;
  max-height: 95%;
}
}


</style>