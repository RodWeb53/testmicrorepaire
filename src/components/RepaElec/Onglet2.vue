<template>
  <div class="boite">
    <div>
      <div class="shadow pl-4 pt-2 pb-2 mt-4 mb-2 rounded contenu">   
        <p class="gras ital">Exemples de pannes pour Mac et PC:</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Ne démarre plus</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Ne charge plus</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Connecteurs abîmés (charge, son, USB, HDMI)</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Accident avec de l’eau</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Etc.</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">   
        <p class="rouge gras">Sur devis</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-4 mb-2 rounded contenu">   
        <p class="gras ital">Exemples de pannes pour les consoles de jeux :</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Ne démarre plus</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">HDMI arraché ou cassé</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Etc.</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-4 rounded contenu">   
        <p class="rouge gras">Sur devis</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Onglet2",
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  padding-right: 10px;
}
.contenu {
  margin-left: 70px;
  width: 90%;
  background-color: #4F531A;
  color: #FFFFFF;
}
.rouge {
  color: #FFF600;
}
.ital {
  font-style: italic;
}
.gras {
  font-weight: bold;
  margin-left: 5%;
}
p {
  font-size: 2.1vh;
}
.boite {
  position: relative;
  top: -10px;
  bottom: -10px;
  background-color: #6D7176;
}
@media only screen and (max-width: 600px) {

.contenu {
  margin-left: 2%;
  width: 95%;
}
p {
  font-size: 2.5vh;
}
}
</style>