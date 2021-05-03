<template>
  <div class="back pt-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-3">
          <div class="footerinfo"> 
            <ul class="header-list">
              <li class="nav-link">Diagnostic et devis gratuit</li>
              <li class="nav-link">Du lundi au vendredi</li>
              <li class="nav-link">De 9h à 19h</li>
              <li class="nav-link">06.73.43.81.99</li>
            </ul>
          </div>
        </div> 
        <div class="col-md-6 col-lg-8">
          <p>Copyright 2021</p><br/>
          <p class="pb-4">Site créer par Rodweb53</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.back {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(154,157,160,1) 0%, rgba(52,58,64,1)  100%);
  font-size: 2.5vh;
  color: #fff;
  text-align: center;
  font-weight: bold;
}

</style>