<template>
  <div>
    <div class='cover'>
      


<div class=''>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wave Button</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../reset.css">
    <link rel="stylesheet" href="style.css">
</div>

<div class='body'>
    <div class="wave-container">
        <button class="btn"></button>
        <div class="wave_wrap">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
</div>

      
    </div>
  </div>
  
</template>










<script>
export default {
  name:'Home04Footer',
  
}
</script>





<style>
.marginbox {
  margin-top: 20px;
  text-align: center;
}


@keyframes spread {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        width: 800px;
        height: 800px;
        opacity: 0;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --maincolor: #0e0a36;
    --darkcolor: #08080c;
    --brightcolor: #ffffff;
}
/* :root {
    --maincolor: #86a8e7;
    --darkcolor: #7f7fd5;
    --brightcolor: #f7f7f7;
} */

.wave-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5); */
    background: linear-gradient(to right, #0f0f31, #110d3b, #030327);
}

.wave-container .btn {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: none;
    background-color: var(--maincolor);
    box-shadow: 0px 1px 10px rgba(3, 17, 78, 0.2);
    transition: transform 0.2s ease-out;
    z-index: 10;
    cursor: pointer;
}

.wave-container .btn:hover {
    transform: scale(1.1);
}

.wave-container .btn:active {
    transform: scale(1);
}

.wave-container .btn::before {
    content: 'Hello, user';
    color: var(--brightcolor);
    font-family: 'Sriracha', sans-serif;
    font-weight: 400;
    font-size: 17px;
}

.wave-container .wave_wrap {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wave-container .wave_wrap .wave {
    position: absolute;
    width: 230px;
    height: 230px;
    border: 10px solid var(--brightcolor);
    border-radius: 50%;
    filter: blur(15px);
    box-shadow: inset 6px 6px 15px rgba(2 37 201/ 1),
    6px 6px 15px rgba(2 37 201/ 1),
    inset calc(6px * -1) calc(6px * -1) 15px rgba(2 37 201/ 0.2),
    calc(6px * -1) calc(6px * -1) 15px rgba(2 37 201/ 0.2);
    
    animation: spread;
    /* 여기가 시작되게 하자 */


    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
    animation-iteration-count: infinite;
}

.wave-container .wave_wrap .wave:nth-child(2) {
    animation-delay: 1s;
}

.wave-container .wave_wrap .wave:nth-child(3) {
    animation-delay: 2s;
}

.cover{
  /* 여기를 조정 */
  /* display: none; */
  position: fixed;
  float: initial;
  top:0%;
  left: 0%;
}

</style>