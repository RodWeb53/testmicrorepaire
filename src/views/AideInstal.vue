<template>
  <div class="fond">
    <div class="container-fluid">
      <div class="row placetitre">
        <div class="col-12">
          <h2 class="text-center couleur">Aide à l'instalation</h2>
          <p class="couleur textBase">Je vous aide à installer un nouvel appareil, à optimiser son utilisation, je vous accompagne dans vos projets...</p>
        </div>
      </div>
    </div>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1">
          </div>
          <div class="col-lg-3">
            <div class="card repa">
              <img class="taillerepa afficher" src="../assets/multimedia.png" alt="Logo de l'aide en audio visuel">
              <h3>Audio visuel</h3>
            </div>
          </div>
          <div class="col-lg-7 liste1">
            <div class="card bg-transparent">
              <div class="boite1">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Je vous aide sur la mise en fonctionnement des matériels suivants :</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Vidéoprojecteur</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Enceinte connectée</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Home cinéma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sect2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1">
          </div>
          <div class="col-lg-7 liste2">
            <div class="card bg-transparent">
              <div class="boite2">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Je vous aide à la mise en service et la formation de :</p>   
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Caméra</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Smartphone</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Tablette</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 onglet2">
            <div class="card repa2">
              <img class="taillerepa afficher" src="../assets/service.png" alt="Logo de mise en service">
              <h3>Mise en service</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="row changement">
          <div class="col-lg-1">

          </div>
          <div class="col-lg-3">
            <div class="card repa3">
              <img class="taillerepa afficher" src="../assets/configuration.png" alt="Logo de configuration">
              <h3>Configuration</h3>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card bg-transparent">
              <div class="boite3">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Je vous aide sur la mise en place de :</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Internet (box, routeur, Wifi)</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Réseau</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Connectique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="container-fluid">
        <div class="row changement">
          <div class="col-lg-1">
          </div>
          <div class="col-lg-7 liste4">
            <div class="card bg-transparent">
              <div class="boite4">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Je vous accompagne sur vos projets de  :</p>   
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Audit</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Accompagnement de :</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Choix d'un fournisseur d'Accès</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Couverture d'un réseau Wifi</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Chiffrage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 onglet4">
            <div class="card repa4">
              <img class="taillerepa afficher" src="../assets/audit.png" alt="Logo de changement">
              <h3>Accompagnement</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>



export default {
  name: 'AideInstal',

}
</script>

<style scoped>

.fond {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgba(239,246,224,1) 100%);
}

.card {
  border-radius: 30px;
}
.fleche {
  width: 10px;
}
.placetitre {
  padding-top: 5%;
}
.repa {
  text-align: center;
  background: #EFF6E0;
  margin-bottom: 3%;
}
img {
  margin: 15px auto 15px auto;
}

.couleur {
  color: #fff;
}
p {
  font-size: 2.1vh;
  font-weight: bold;
}
.taillerepa {
  width: 50%;
  height: 50%;
}
.textBase {
  font-size: 3vh;
  padding: 5% 10% 5% 10%;
}
.boite1 {
  position: relative;
  background-color: #EFF6E0;
  padding-left: 5%;
  padding-top: 1.5%;
  padding-right: 5%;
  border-radius: 30px;
}
.boite1 p {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 3.5%;
}
.changement {
  padding-top: 1%;
}
.boite2 {
  position: relative;
  background-color: #AEC3B0;
  padding-left: 5%;
  padding-top: 1.5%;
  padding-right: 5%;
  border-radius: 30px;
}
.boite2 p {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 3.5%;
}
.repa2 {
  text-align: center;
  background: #AEC3B0;
  margin-top: -12%;
}



.boite3 {
  position: relative;
  background-color: #99b3a9;
  padding-left: 5%;
  padding-top: 1.5%;
  padding-right: 5%;
  border-radius: 30px;
}
.boite3 p {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 3.5%;
}
.repa3 {
  text-align: center;
  background: #99b3a9;
}

.boite4 {
  position: relative;
  background-color: #84a3a1;
  padding-left: 5%;
  padding-top: 1.5%;
  padding-right: 5%;
  border-radius: 30px;
}
.boite4 p {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 3.5%;
}
.repa4 {
  text-align: center;
  background: #84a3a1;
}
.section4 {
  padding-bottom: 3%;
}



@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
  padding-right: 0%;
}
.repa2, .repa4 {
  margin-top: 0px;
}
.taillerepa {
  width: 30%;
  height: 30%;
}

}
@media only screen and (max-width: 600px) {
.repa2, .repa3, .repa4 {
  margin-top: 10px;
}
.repa {
  margin-bottom: 0%;
}

section {
  padding-left: 2%;
  padding-right: 2%;
}
.taillerepa {
  width: 30%;
  height: 30%;
}
.liste2, .liste4 {
  order: 2;
}
.onglet2, .onglet4 {
  order: 1;
}
.liste6 {
  margin-bottom: 5%;
}
}
@media (min-width: 601px) and (max-width: 991px) {
.repa2, .repa3, .repa4 {
  margin-top: 10px;
}
.repa {
  margin-bottom: 0%;
}

section {
  padding-left: 2%;
  padding-right: 2%;
}
.taillerepa {
  width: 15%;
  height: 15%;
}
.liste2, .liste4 {
  order: 2;
}
.onglet2, .onglet4 {
  order: 1;
}

}
@media (min-width: 992px) and (max-width: 1480px) {
.liste1 {
  margin-bottom: 1%;
}
.repa2 {
margin-top: 0px;
}
}
</style>