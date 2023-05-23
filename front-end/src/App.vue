<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>


<style>
#app {
font-family: 'Noto Sans KR','Montserrat', sans-serif;
/* font-family: 'Montserrat', 'Noto Sans KR', sans-serif; */
color:white;
/* font-family: 'IBM Plex Sans', sans-serif; */
/* text-align: center; */
/* color: #2c3e50; */
}

.container{
  width:1100px;
  margin:auto;

}

/* .background{ 
  min-width: 100%;
  min-height: 100%;
  background-color: #0e1318;
  background-size: cover;
  background-position: center center;
  position:fixed;
  /* background-image: url(./assets/background.png);
}  */

.violet{
  color: #C0B7E8;
  font-size:45px;
  font-weight: 550;
  
}

/* 확인용 */
div{
  /* background-color: rgb(199, 199, 199); */
  /* border: solid rgb(39, 38, 38) 1px; */
  
}

img:hover{
  cursor:pointer;
}

.box {
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.router-link{
  text-decoration: none;
  color:white ;

}
</style>