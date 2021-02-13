<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Aide à l'instalation</h2>
          <p class="ml-5 textBase">Je vous apporte mon aide à la mise en place d'un nouveau matériel, de service et sur vos futur projet</p>
        </div>
        <!-- Première rangée de card -->
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Audio visuel</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Vidéo projecteur</li>
                      <li>Enceinte connectée</li>
                      <li>Home cinéma</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Mise en service</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Aide à la mise en service et formation:</li>
                        <ul>
                          <li>Caméra</li>
                          <li>Smartphone</li>
                          <li>Tablette ...</li>
                        </ul>
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
                      <li>Aide sur la mise en place:</li>
                        <ul>
                          <li>Internet (box, Routeur, Wifi)</li>
                          <li>Réseau</li>
                          <li>Connectique</li>
                        </ul>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Accompagnement projet</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li>Audit</li>
                      <li>Accompagnement:</li>
                        <ul>
                          <li>Choix d'un fournisseur d'acces</li>
                          <li>Couverture d'un réseau Wifi ...</li>
                        </ul>
                      <li>Chiffrage</li>
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
  name: 'AideInstal',
}
</script>

<style scoped>

.textBase {
  font-size: 3vh;
  padding-left: 5%;
}
</style>