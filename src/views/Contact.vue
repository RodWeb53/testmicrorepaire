<template>
  <div class="fond">
    <div class="container-fluid">

        <!-- Première rangée de card -->
        <div class="container-fluid pt-5 pb-4">
          <div class="row justify-content-center">
            <div class="col-sm-12 col-lg-11">
              <div class="card-deck">
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Profil</h3>
                  </div>
                  <div class="card-body mt-2">
                    <img class="profil" src="../assets/carousel/img3.jpg" alt="Photo de Thomas">
                  </div>
                </div>
                <div class="card">
                  <div class="card-header couleurCard text-center">
                    <h3>Qui suis-je ?</h3>
                  </div>
                  <div class="card-body mt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad cupiditate assumenda nam pariatur dignissimos quidem soluta minima, in corrupti natus dolorum quos temporibus voluptatibus totam odio velit tempora sint sapiente eveniet a. Accusantium veritatis ducimus quae veniam atque dicta?</p>
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
                  <div class="card-header couleurCard text-center">
                    <h3>Comment me joindre</h3>
                  </div>
                  <div class="card-body mt-2">
                    <div class="row">
                      <div class="col-sm-12 col-md-12 col-lg-4 ml-auto mr-auto centre">
                        <ul>
                          <li>Du lundi au vendredi de 9h à 19h</li>
                            <ul>
                              <li><i class="fas fa-phone-alt"> </i> 06 73 43 81 99</li>
                              <li><i class="far fa-envelope"> </i> microrepaire@gmail.com</li>
                            </ul>
                        </ul>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-4 ml-auto mr-auto centre">
                        <ul>
                          <li>Magasin</li>
                            <ul>
                              <li>21 Rue du Vieux-Pont</li>
                              <li>49290 Chalonnes-sur-Loire</li>
                            </ul>
                        </ul>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-4 ml-auto mr-auto centre">
                        <ul>
                          <li>Lundi 14h à 19h</li>
                          <li>Mardi 8h30 à 12h</li>
                          <li>mercredi 13h30 à 19h</li>
                          <li>Vendredi 14h à 19h</li>
                        </ul>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mt-4 mb-4">
          <div class="row justify-content-center ">
            <div class="col-11">
              <div class="card">
                <div class="card-header couleurCard text-center">
                  <h3>Articles de presse</h3>
                </div>
                <div class="card-body mt-2 ml-auto mr-auto">
                  <div>
                    <img class="mr-4 artpresse" src="../assets/article1-min.png" alt="Article de Ouest France du 16/12/2019">
                    <img class="ml-4" src="../assets/article2-min.png" alt="article N° 2">
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
.fond {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgb(240, 244, 247) 100%);
}
.textBase {
  font-size: 3vh;
  padding-left: 5%;
}
.couleurCard {
  background: #343A40;
  color: #fff;
}
.profil {
  width: 100%;
}

@media (max-width: 375px){
 .textBase {
  padding-left: 0%;
}
h3 {
  font-size: 3vh;
}
li {
  font-size: 1.8vh;
}
.artpresse {
  width: 200px;
}
}
@media (min-width: 376px) and (max-width: 620px){
.artpresse {
  width: 280px;
}
li {
  font-size: 2vh;
}
}
@media (min-width: 621px) and (max-width: 820px){
li {
  font-size: 1.8vh;
}
}
</style>