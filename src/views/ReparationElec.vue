<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3">
          <h2 class="text-center mt-3">Réparation Electronique et Soudures</h2>
          <p class="ml-5 textBase">L’électronique est dans tous les appareils de nos jours, téléphones, télévisions, chaines HIFI , consoles de jeux, ordinateurs… <br/>
          Par exemple, un ordinateur qui ne démarre plus du tout, qui ne charge plus, ou bien un port usb arraché etc… Malgré le fait que la garantie soit passée de date, la panne peut souvent être réparée sans forcément changer la carte mère et engager des frais plus qu’onéreux. C’est d’autant plus important lorsque l’appareil en question nous a coûté assez cher, et auquel on tient beaucoup.</p>
        </div>
        <!-- Première rangée de card -->
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-md-12 col-lg-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Smartphones et tablettes</h3>
                  </div>
                  <div class="card-body mt-2">
                    <p class="gras">iPhone et Android</p>
                    <p class="ital">Exemples de pannes :</p>
                    <ul>
                      <li>Ecran cassé</li>
                      <li>Prise de charge abîmée</li>
                      <li>Batterie en fin de vie</li>
                      <li>Ne démarre plus</li>
                    </ul>
                    <p class="rouge">Sur devis</p>
                    <ul>
                      <li class="sanspoint">Ne répare pas les appareils encore sous garantie</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Ordinateurs et consoles de jeux</h3>
                  </div>
                  <div class="card-body mt-2">
                    <p class="gras">Mac et PC</p>
                    <p class="ital">Exemples de pannes :</p>
                    <ul>
                      <li>Ne démarre plus</li>
                      <li>Ne charge plus</li>
                      <li>Connecteurs abîmés (Charge, Son, USB, HDMI)</li>
                      <li>Accident avec de l’eau</li>
                      <li>Etc…</li>
                    </ul>
                    <p class="rouge">Sur devis</p>
                    <p class="gras">Consoles de jeux</p>
                    <ul>
                      <li>Ne démarre plus</li>
                      <li>HDMI arraché ou cassé</li>
                      <li>Etc…</li>
                    </ul>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Systèmes HIFI et Ecrans plats</h3>
                  </div>
                  <div class="card-body mt-2">
                    <p class="gras">TV</p>
                    <p class="ital">Exemples de pannes :</p>
                    <ul>
                      <li>Ne s’allume plus</li>
                      <li>TV ne réagit plus à la télécommande</li>
                      <li>Problèmes de couleurs</li>
                      <li>Etc…</li>
                    </ul>
                    <p class="rouge">Sur devis</p>
                    <p class="gras">HIFI</p>
                    <ul>
                      <li>Ne s’allume plus</li>
                      <li>Défaut de son</li>
                      <li>Lecteur CD ne s’ouvre plus</li>
                      <li>Etc…</li>
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
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Rachat</h3>
                  </div>
                  <div class="card-body mt-2">
                    <ul>
                      <li class="vert">Rachat de matériel pour pièces</li>
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
  name: 'ReparationElec',
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
.rouge {
  color: red;
  text-align: center;
}
.sanspoint {
  list-style: none;
}
.gras {
  text-align: center;
  font-weight: bold;
}
.ital {
  text-align: center;
  font-style: italic;
}
.vert {
  color: green;
  font-weight: bold;
  text-align: center;
  font-size: 3vh;
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