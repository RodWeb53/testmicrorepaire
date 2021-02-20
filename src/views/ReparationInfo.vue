<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Services</h2>
          <p class="ml-5 textBase">Réparation toutes marques PC, MAC, Android, Linux<br/>
            Une réponse téléphonique claire et précise, un technicien chez vous rapidement. </p>
        </div>
        <!-- Première rangée de card -->
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-md-12 col-lg-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Réparation</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Réparation toutes marques et tous supports (ordinateurs fixes et portables, tablettes).</li>
                      <li>Récupération de données, sauvegarde.</li>
                      <li>Amélioration des performances système.</li>
                      <li>Changement des composants.</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Changement</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Changement des composants:</li>
                        <ul>
                          <li>Disque dur, port USB, mémoire.</li>
                          <li>Carte mère, carte Wifi, carte bluetooth.</li>
                          <li>Clavier ...</li>
                        </ul>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Installation</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Installation logiciels PC Windows  PC MAC.</li>
                      <li>Mise en route d'Internet sur tous supports (PC, tablettes, smartphones).</li>
                      <li>Installation des systèmes d'exploitations.</li>
                      <li>Vérification de la sécurité du système.</li>
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
                  <div class="card-header text-center">
                    <h3>Configuration</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Configuration sur mesure d'un PC et montage selon vos besoin dans les domaines suivants:</li>
                        <ul>
                          <li>CAO</li>
                          <li>Gamer.</li>
                          <li>Montage vidéo.</li>
                          <li>Bureautique.</li>
                        </ul>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Sauvegarde</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Sauvegarde personalisé.</li>
                      <li>Sauvegarde image du PC.</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Nettoyage</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Nettoyage et protection.</li>
                      <li>Bilan de santé de votre ordinateur.</li>
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
  name: 'ReparationInfo',
}
</script>

<style scoped>

.textBase {
  font-size: 3vh;
  padding-left: 5%;
}

</style>