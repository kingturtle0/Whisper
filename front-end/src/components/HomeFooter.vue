<template>
    <div id='mt30'>
      <img src="./assets/rate_poster/menubar.png" alt="rr" id='ratepng'>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container2{
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;

}

.text_big{
  font-size: 40px;
  color:white;
}

#rate_poster{
  min-height:500px;
  max-height: 600px;
}

.rate_box{
  display: flex;
  text-align: left;
  
  /* border:solid white 1px; */
  /* width:100vw; */
}
#violet{
  color: #C0B7E8;
  font-size:45px;
  font-weight: 550;
  
}

#rate_container{
  border:solid white 1px;
  text-align: center;
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  margin-bottom: 20px;
}

#ratepng{
  border-radius: 20%;
}

#text_sm{
  flex-wrap: wrap;
  font-size: 18px;
}

#mt30{
  margin-top: 30px;
}

.column{
  flex-direction: column;
}
</style>
