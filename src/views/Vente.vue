<template>
  <div class="fond">
    <div class="container-fluid">
      <div class="row placetitre">
        <div class="col-12">
          <h2 class="text-center couleur">Achats / Conseils</h2>
          <p class="couleur textBase">Je suis à votre écoute et je vous conseille pour l'achat de matériel informatique, d'objet connecté, de système domotique...</p>
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
              <img class="taillerepa afficher" src="../assets/pc.png" alt="Logo conseil PC">
              <h3>Conseil PC</h3>
            </div>
          </div>
          <div class="col-lg-7 liste1">
            <div class="card bg-transparent">
              <div class="boite1">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Aide au choix d'une configuration PC</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Gamer</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- CAO</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Bureautique</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Montage vidéo</p>
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
                    <p>Etude de votre projet en domotique</p>   
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Accompagnement dans votre choix</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Aide à l'installation</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Vente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 onglet2">
            <div class="card repa2">
              <img class="taillerepa afficher" src="../assets/domotique.png" alt="Logo de conseil domotique">
              <h3>Domotique</h3>
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
              <img class="taillerepa afficher" src="../assets/objetconnect.png" alt="Logo de conseil objet connecté">
              <h3>Objet connecté</h3>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card bg-transparent">
              <div class="boite3">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Etude de votre projet d'objet connecté</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Accompagnement dans votre choix</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Aide à l'installation et la mise en service</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Vente</p>
                  </div>
                </div>
              </div>
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
          <div class="col-lg-7 liste4">
            <div class="card bg-transparent">
              <div class="boite4">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Etude de votre projet multimédia</p>   
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Accompagnement dans votre choix</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>Montage et paramétrage :</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Home cinéma</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- TV connectée</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Système audio sans fil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 onglet4">
            <div class="card repa4">
              <img class="taillerepa afficher" src="../assets/multimedia.png" alt="Logo de conseil multimédia">
              <h3>Multimédia</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section5">
      <div class="container-fluid">
        <div class="row changement">
          <div class="col-lg-1">
          </div>
          <div class="col-lg-3">
            <div class="card repa5">
              <img class="taillerepa afficher" src="../assets/vente.png" alt="Logo de vente de matériel">
              <h3>Vente</h3>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card bg-transparent">
              <div class="boite5">
                <div>
                  <div class="shadow rounded contenu">
                    <p>Vente de :</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Matériel neuf</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Matériel occasion</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Reprise ancien matériel</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Respect du RGPD</p>
                  </div>
                  <div class="shadow rounded contenu">
                    <p>- Label REPAR'ACTEURS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>



export default {
  name: 'Vente',
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
.changement {
  padding-top: 1%;
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
    margin-top: -12%;
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
  margin-top: -1%;
}
/* --- CSS 5° lignes  ---*/
.boite5 {
  position: relative;
  background-color: #598392;
  padding-left: 5%;
  padding-top: 1.5%;
  padding-right: 5%;
  border-radius: 30px;
  font-weight: bold;
}
.boite5 p {
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-left: 3.5%;
}
.repa5 {
  text-align: center;
  background: #598392;
  font-weight: bold;
}
.section5 {
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
.repa2, .repa3, .repa4, .repa5 {
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

}
@media (min-width: 601px) and (max-width: 991px) {
.repa2, .repa3, .repa4, .repa5 {
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
.repa3 {
margin-top: 0px;
}
}
</style>