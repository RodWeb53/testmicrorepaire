<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Services</h2>
          <p class="ml-5 textBase">Pour ne plus faire d'allers-retours au magasin avec votre ordinateur, faites appel à MicroRepaire.<br/>
            Une réponse téléphonique claire et précise, un technicien chez vous rapidement. </p>
        </div>
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="card-deck">
              <div class="card">
                <div class="card-header text-center">
                  <h3>Réparation</h3>
                </div>
                <div class="card-body mt-2">
                  <ul>
                    <li>Réparation toutes marques et tous supports (ordinateurs fixes et portables, tablettes).</li>
                    <li>Récupération de données, sauvegarde.</li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="card-header text-center">
                  <h3>Installation</h3>
                </div>
                <div class="card-body mt-2">
                  <ul>
                    <li>Installation de périphériques et de logiciels.</li>
                    <li>Mise en route d'Internet sur tous supports (PC, tablettes, smartphones).</li>
                    <li>Configuration.</li>
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
</template>

<script>
export default {
  name: 'ReparationInfo',
}
</script>

<style scoped>

.textBase {
  font-size: 3vh;
}
</style>