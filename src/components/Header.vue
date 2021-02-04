<template>
  <div>
    
    <nav id="barnav" class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">

      <div class="container-fluid">
        <div class="col-md-8 col-lg-10  text-center">
          <div class="navbar-brand logoCenter">
            <h1 class="text-center"> MICROREPAIRE</h1>
            <h2>Informatique Atelier Conseil</h2>
          </div> 
        </div>
        <div class="col-md-4 col-lg-2">
          <div class="headerDroitVisible "> 
            <ul class="header-list">
              <li class="nav-link">Diag et devis gratuit</li>
              <li class="nav-link">Lundi / vendredi</li>
              <li class="nav-link">de 9h à 19h</li>
              <li class="nav-link">06.06.06.06</li>
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
           <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="fas fa-tools"></i>
               Réparation informatique              
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="fas fa-cart-arrow-down"></i>
               Vente
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="fas fa-hand-holding-medical"></i>
               Aide instalation
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="fas fa-file-contract"></i>
               Contrat maintenance
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="fas fa-tools"></i>
               Réparation électrique
            </a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#">
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
}
</script>

<style scoped>

.header-list {
  text-decoration: none;
  color: white !important;
  text-align: end;

}
.menu {
  width: 100%;
}


@media (max-width: 768px){
  .headerDroitVisible {
    display: none;
  }
}

</style>