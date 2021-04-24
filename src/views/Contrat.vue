<template>
  <div class="fond">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center couleur mt-5">Contrat de maintenance</h2>
          <p class="ml-5 couleur textBase">Service aux entreprises et collectivités</p>
        </div>
        <div class="container-fluid ">
          <!-- Début 1° onglet -->
          <div class="btn btn1 largeur mt-3" v-on:click="toggleOnglet1">
            <img class="taillerepa afficher" src="../assets/contrat.png" alt="Logo de réparation">
            <br>
            <h3>Contrat</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle1">
              <div ></div>
              <onglet1></onglet1>
            </div>
          <!-- Fin 1° onglet -->
          <!-- Début 2° onglet -->
          <div class="btn btn2 largeur mt-3" v-on:click="toggleOnglet2">
            <img class="taillerepa afficher" src="../assets/recycle.png" alt="Logo de changement">
            <br>
            <h3>Recyclage</h3>
          </div>
          <!-- Affichage de l'onglet en petit taille -->
            <div class="card mt-4 mb-5 affichePetit" v-if="toggle2">
              <div></div>
              <onglet2></onglet2>
            </div>
          <!-- Fin 2° onglet -->

          <!-- Gestion de l'affichage des commentaire au même endroit sur grand écran -->
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle1">
            <div class="barreOnglet1"></div>
            <onglet1></onglet1>
          </div>
          <div class="card mt-4 mb-5 afficher couleurfond" v-if="toggle2">
            <div class="barreOnglet2"></div>
            <onglet2></onglet2>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>

import Onglet1 from '../components/Contrat/Onglet1'
import Onglet2 from '../components/Contrat/Onglet2'


export default {
  name: 'Contrat',
  data() {
    return {
      toggle1: true,
      toggle2: false,
    }
  },
  methods: {
    toggleOnglet1: function(){
      this.toggle1 = true
      this.toggle2 = false
    },
    toggleOnglet2: function(){
      this.toggle1 = false
      this.toggle2 = true
    },
 
  },
  components: {
    'onglet1': Onglet1,
    'onglet2': Onglet2,
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
  font-size: 1.7vw;
}
.largeur {
  width: 16.5%;
  margin-left: 8%;
  margin-right: 8%;
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
.barreOnglet1 {
  position: relative;
  top: -20px;
  left: 8.5%;
  width: 15.5%;
  height: 10px;
  background: #184875;
  border-radius: 5px;
}
.barreOnglet2 {
  position: relative;
  top: -20px;
  left: 41%;
  width: 15.5%;
  height: 10px;
  background: #4F531A;
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