<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Contrat de maintenance</h2>
          <p class="ml-5 textBase">Service aux entreprises et collectivités</p>
        </div>
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Contrat</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Plan de maintenance</li>
                      <li>Configuration ponctuel</li>
                      <li>Assistance avec vos prestataires:</li>
                        <ul>
                          <li>Téléphonie, Logiciel professionel ....</li>
                        </ul>
                      <li>Audit:</li>
                        <ul>
                          <li>Réseau</li>
                          <li>Parc informatique</li>
                          <li>Contrat de service</li>
                        </ul>
                      <li>Aide à l'achat</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Recyclage</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Récupération de vos matériels obsolète</li>
                        <ul>
                          <li>Recyclage</li>
                          <li>Respect du RGPD</li>
                          <li>Affilié à REPAR'ACTEURS des Pays de la Loire</li>
                          <li class="lignelogo"><img class="logorepar" src="../assets/reparacteur-min.png" alt="Logo reparacteurs des pays de la loire"></li>
                        </ul>
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
  name: 'Contrat',
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
.logorepar {
  width: 200px;
}
.lignelogo {
  list-style: none;
}
@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
}
h3 {
  font-size: 3vh;
}
.logorepar {
  width: 150px;
}
}
</style>