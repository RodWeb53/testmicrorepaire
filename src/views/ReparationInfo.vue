<template>
  <div class="fond">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center couleur mt-5">Services</h2>
          <p class="ml-5 couleur textBase">Réparation toutes marques PC, MAC, Android, Linux<br/>
            Une réponse téléphonique claire et précise, un technicien chez vous rapidement</p>
        </div>
        <div class="container-fluid ">
          <!-- Début 1° onglet -->
          <div class="btn btn1 largeur mt-3" v-on:click="toggleOnglet1">
            <img class="taillerepa afficher" src="../assets/reparationcercle.png" alt="Logo de réparation">
            <br>
            <h3>Réparation</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle1">
              <div ></div>
              <onglet1></onglet1>
            </div>
          <!-- Fin 1° onglet -->
          <!-- Début 2° onglet -->
          <div class="btn btn2 largeur mt-3" v-on:click="toggleOnglet2">
            <img class="taillerepa afficher" src="../assets/reparationChangement.png" alt="Logo de changement">
            <br>
            <h3>Changement</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle2">
              <div></div>
              <onglet2></onglet2>
            </div>
          <!-- Fin 2° onglet -->
          <!-- Début 3° onglet -->
          <div class="btn btn3 largeur mt-3" v-on:click="toggleOnglet3">
            <img class="taillerepa afficher" src="../assets/install-min.png" alt="Logo de changement">
            <br>
            <h3>Installation</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle3">
              <div></div>
              <onglet3></onglet3>
            </div>
          <!-- Fin 3° onglet -->
          <!-- Début 4° onglet -->
          <div class="btn btn4 largeur mt-3" v-on:click="toggleOnglet4">
            <img class="taillerepa afficher" src="../assets/analyse-min.png" alt="Logo de changement">
            <br>
            <h3>Configuration</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle4">
              <div></div>
              <onglet4></onglet4>
            </div>
          <!-- Fin 4° onglet -->
          <!-- Début 5° onglet -->
          <div class="btn btn5 largeur mt-3" v-on:click="toggleOnglet5">
            <img class="taillerepa afficher" src="../assets/sauvegarde-min.png" alt="Logo de changement">
            <br>
            <h3>Sauvegarde</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle5">
              <div></div>
              <onglet5></onglet5>
            </div>
          <!-- Fin 5° onglet -->
          <!-- Début 6° onglet -->
          <div class="btn btn6 largeur mt-3" v-on:click="toggleOnglet6">
            <img class="taillerepa afficher" src="../assets/nettoyage-min.png" alt="Logo de changement">
            <br>
            <h3>Nettoyage</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle6">
              <div></div>
              <onglet6></onglet6>
            </div>
          <!-- Fin 6° onglet -->

          <!-- Gestion de l'affichage des commentaire au même endroit sur grand écran -->
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle1">
            <div class="barreOnglet1"></div>
            <onglet1></onglet1>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle2">
            <div class="barreOnglet2"></div>
            <onglet2></onglet2>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle3">
            <div class="barreOnglet3"></div>
            <onglet3></onglet3>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle4">
            <div class="barreOnglet4"></div>
            <onglet4></onglet4>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle5">
            <div class="barreOnglet5"></div>
            <onglet5></onglet5>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle6">
            <div class="barreOnglet6"></div>
            <onglet6></onglet6>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>

import Onglet1 from '../components/RepaInfo/Onglet1'
import Onglet2 from '../components/RepaInfo/Onglet2'
import Onglet3 from '../components/RepaInfo/Onglet3'
import onglet4 from '../components/RepaInfo/Onglet4'
import onglet5 from '../components/RepaInfo/Onglet5'
import Onglet6 from '../components/RepaInfo/Onglet6'

export default {
  name: 'ReparationInfo',
  data() {
    return {
      toggle1: true,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false
    }
  },
  methods: {
    toggleOnglet1: function(){
      this.toggle1 = true
      this.toggle2 = false
      this.toggle3 = false
      this.toggle4 = false
      this.toggle5 = false
      this.toggle6 = false
    },
    toggleOnglet2: function(){
      this.toggle1 = false
      this.toggle2 = true
      this.toggle3 = false
      this.toggle4 = false
      this.toggle5 = false
      this.toggle6 = false
    },
    toggleOnglet3: function(){
      this.toggle1 = false
      this.toggle2 = false
      this.toggle3 = true
      this.toggle4 = false
      this.toggle5 = false
      this.toggle6 = false
    },
    toggleOnglet4: function(){
      this.toggle1 = false
      this.toggle2 = false
      this.toggle3 = false
      this.toggle4 = true
      this.toggle5 = false
      this.toggle6 = false
    },
    toggleOnglet5: function(){
      this.toggle1 = false
      this.toggle2 = false
      this.toggle3 = false
      this.toggle4 = false
      this.toggle5 = true
      this.toggle6 = false
    },
    toggleOnglet6: function(){
      this.toggle1 = false
      this.toggle2 = false
      this.toggle3 = false
      this.toggle4 = false
      this.toggle5 = false
      this.toggle6 = true
    }
  },
  components: {
    'onglet1': Onglet1,
    'onglet2': Onglet2,
    'onglet3': Onglet3,
    'onglet4': onglet4,
    'onglet5': onglet5,
    'onglet6': Onglet6,
  },

}
</script>

<style scoped>
.fond {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgba(154,157,160,1) 100%);
}
.couleurfond {
  background-color: #6D7176;
}
.couleur {
  color: #fff;
}
.affichePetit {
  display: none;
}
h3 {
  font-size: 1.9vw;
}
.largeur {
  width: 15.5%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.btn {
  border-radius: 25px;
  color: #fff;
}
.btn1 {
  background-color: #184875;
}
.btn2 {
  background-color: #4F531A;
}
.btn3 {
  background-color: #9B3819;
}
.btn4 {
  background-color: #89396E;
}
.btn5 {
  background-color: #3A5A36;
}
.btn6 {
  background-color: #702515;
}

.barreOnglet1 {
  position: relative;
  top: -20px;
  left: 1%;
  width: 14.5%;
  height: 10px;
  background: #184875;
  border-radius: 5px;
}
.barreOnglet2 {
  position: relative;
  top: -20px;
  left: 17.5%;
  width: 14.5%;
  height: 10px;
  background: #4F531A;
  border-radius: 5px;
}
.barreOnglet3 {
  position: relative;
  top: -20px;
  left: 34%;
  width: 14.5%;
  height: 10px;
  background: #9B3819;
  border-radius: 5px;
}
.barreOnglet4 {
  position: relative;
  top: -20px;
  left: 50.5%;
  width: 14.5%;
  height: 10px;
  background: #89396E;
  border-radius: 5px;
}
.barreOnglet5 {
  position: relative;
  top: -20px;
  left: 67%;
  width: 14.5%;
  height: 10px;
  background: #3A5A36;
  border-radius: 5px;
}
.barreOnglet6 {
  position: relative;
  top: -20px;
  left: 83.5%;
  width: 14.5%;
  height: 10px;
  background: #702515;
  border-radius: 5px;
}

.taillerepa {
  width: 50%;
  height: 50%;
}

.textBase {
  font-size: 3vh;
  padding-left: 5%;
  padding-right: 5%;
  text-align: justify;
}

@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
  padding-right: 0%;
}
h3 {
  font-size: 3vh;
}
}
@media only screen and (max-width: 600px) {
.largeur {
  width: 100%;
}
.afficher {
  display: none;
}
.affichePetit {
  display: inline-block;
  width: 100%;
  background-color: #6D7176;
}
h3 {
  font-size: 3vh;
}
.largeur {
  margin-left: 0.5%;
  margin-right: 0.5%;
}
}

</style>