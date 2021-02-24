<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Achats / Conseils</h2>
          <p class="ml-5 textBase">Je suis à votre écoute et vous conseil pour vos achats sur le matériel informatique, objet connecté, domotique et multimédia</p>
        </div>
        <!-- Première rangée de card -->
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Conseil PC</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Aide au choix d'une configuration PC.</li>
                      <li>Gamer, CAO, Bureautique, Montage vidéo ...</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Conseil Domotique</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing!</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Conseil Objet connecté</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing!</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Deuxième rangée de Card -->
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Conseil Multimédia</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing!</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                      <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Vente</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Matériel neuf.</li>
                      <li>Matériel occasion.</li>
                      <li>Reprise ancien matériel.</li>
                      <li>Respect du RGPD.</li>
                      <li>Label REPAR'ACTEURS.</li>
                    </ul>
                  </div>
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
export default {
  name: 'Vente',
}
</script>

<style scoped>

.textBase {
  font-size: 3vh;
  padding-left: 5%;
}

.couleurCard {
  background: #343A40;
  color: #fff;
}
@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
}
h3 {
  font-size: 3vh;
}
}

</style>