<template>
  <div class="boite">
    <div>
      <div class="shadow pl-4 pt-2 pb-2 mt-4 mb-2 rounded contenu">   
        <p>Je vous aide sur la mise en fonctionnement des matériels suivants :</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Vidéoprojecteur</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-2 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Enceinte connectée</p>
      </div>
      <div class="shadow pl-4 pt-2 pb-2 mt-2 mb-4 rounded contenu">
        <p><img src="./flecheblanc.png" alt="flèche blanche">Home cinéma</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Onglet1",
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
  background-color: #184875;
  color: #FFFFFF;
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
