<template>
  <div class="fond">
    <div class="container-fluid">
      <div class="row placetitre">
        <div class="col-12">
          <h2 class="text-center couleur">Contrat de maintenance</h2>
          <p class="couleur textBase">Service aux entreprises et collectivités</p>
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
              <img class="taillerepa afficher" src="../assets/contrat.png" alt="Logo de contrat">
              <h3>Contrat</h3>
            </div>
          </div>
          <div class="col-lg-7 liste1">
            <div class="card bg-transparent">
              <div class="boite1">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Plan de maintenance</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Configuration ponctuelle</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Assistance avec vos prestataires:</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Téléphonie, logiciel professionnel...</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Audit:</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Réseau</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Parc informatique</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Contrat de service</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Aide à l'achat</p>
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
        <div class="row">
          <div class="col-lg-1">
          </div>
          <div class="col-lg-7 liste2">
            <div class="card bg-transparent">
              <div class="boite2">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Récupération de votre matériel obsolète</p>   
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Recyclage</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Respect du RGPD</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Affilié à REPAR'ACTEURS des Pays-de-la-Loire</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p><img class="logorepar" src="../assets/reparacteur-min.png" alt="Logo reparacteurs des pays de la loire"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 onglet2">
            <div class="card repa2">
              <img class="taillerepa afficher" src="../assets/recycle.png" alt="Logo de recyclage">
              <h3>Recyclage</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>



export default {
  name: 'Contrat',

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
}
.logorepar {
  width: 200px;
}

.section4 {
  padding-top: 1%;
  padding-bottom: 3%;
}



@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
  padding-right: 0%;
}
.repa2, .repa4, .repa6 {
  margin-top: 0px;
}
.taillerepa {
  width: 30%;
  height: 30%;
}

}
@media only screen and (max-width: 600px) {
.repa2 {
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
.liste2{
  order: 2;
}
.onglet2 {
  order: 1;
}

}
@media (min-width: 601px) and (max-width: 991px) {
.repa2 {
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
.liste2 {
  order: 2;
}
.onglet2 {
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