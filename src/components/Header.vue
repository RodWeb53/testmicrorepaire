<template>
  <div>
    
    <nav id="barnav" class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">

      <div class="container-fluid">
        <div class="col-md-7 col-lg-9  text-center">
          <router-link :to="`/`">
            <div class="navbar-brand logoCenter">
              <h1 class="text-center"> MICROREPAIRE</h1>
              <h2>Informatique Atelier Conseil</h2>
            </div> 
          </router-link>
        </div>
        <div class="col-md-5 col-lg-3">
          <div class="headerDroitVisible"> 
            <ul class="header-list">
              <li class="nav-link">Diagnostique et devis gratuit</li>
              <li class="nav-link">Du lundi au vendredi</li>
              <li class="nav-link">De 9h à 19h</li>
              <li class="nav-link">06.73.43.81.99</li>
            </ul>
          </div>
        </div>    
      </div>
    </nav>
    <nav id="barnav1" class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="container-fluid">

        <ul class="navbar-nav menu nav nav-pills nav-fill">
           <li class="nav-item" @click="reparationInfo()">
            <a class="nav-link" href="#" title="Réparation informatique">
              <i class="fas fa-tools"></i>
               Réparation et configuration              
            </a>
          </li>
          <li class="nav-item" @click="vente()">
            <a class="nav-link" href="#" title="Vente">
              <i class="fas fa-cart-arrow-down"></i>
               Conseil à l'achat
            </a>
          </li>
          <li class="nav-item" @click="aideInstal()">
            <a class="nav-link" href="#" title="aide à l'installation">
              <i class="fas fa-hand-holding-medical"></i>
               Aide à l'installation
            </a>
          </li>
          <li class="nav-item" @click="contrat()">
            <a class="nav-link" href="#" title="contrat de maintenance">
              <i class="fas fa-file-contract"></i>
               Contrat maintenance
            </a>
          </li>
          <li class="nav-item" @click="reparationElec()">
            <a class="nav-link" href="#" title="Réparation Electronique">
              <i class="fas fa-tools"></i>
               Réparation électronique 
            </a>
          </li>
          <li class="nav-item" @click="contact()">
            <a class="nav-link" href="#" title="Contact">
              <i class="fas fa-sign-out-alt"></i>
              Contact
            </a>
          </li>
        </ul>    
        </div>
      </div>
    

    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    reparationInfo () {
      this.$router.push('/ReparationInfo')
    },
    vente () {
      this.$router.push('/Vente')
    },
    aideInstal () {
      this.$router.push('/AideInstal')
    },
    contrat () {
      this.$router.push('/Contrat')
    },
    reparationElec () {
      this.$router.push('/ReparationElec')
    },
    contact () {
      this.$router.push('/Contact')
    },
  }
}
</script>

<style scoped>

a {
  font-size: 2.5vh;
}
.headerDroitVisible {
  font-size: 1.8vh;
}
.header-list {
  text-decoration: none;
  color: white !important;
  text-align: end;
}
.menu {
  width: 100%;
}

@media (max-width: 475px){
h1 {
  font-size: 4vh;
}
h2 {
  font-size: 3vh;
}
.headerDroitVisible {
  display: none;
}
}

@media (min-width: 476px) and (max-width: 778px){
  .headerDroitVisible {
    display: none;
  }
}
@media (min-width: 991px) and (max-width: 1065px){
a {
  font-size: 1.7vh;
}
}
@media (min-width: 1066px) and (max-width: 1280px){
a {
  font-size: 1.9vh;
}
}
</style>