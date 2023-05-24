<template>
  <div class="background">
    <div class="container">
      <Home01Navbar />
      <section class="background">
        <div class="profilecontainer">
          <div v-if="modal === false" class="userprofile">
            내 정보
          </div>

          <img v-if="modal" src="@/assets/nyancat1.gif" alt="" class='modal-gif'>
          <!-- <img v-if="modal" src="@/assets/AI_giphy.gif" alt="" class='modal-gif'> -->
          <div v-if="modal" class="mt-100 mb-4 mb-md-0 zindex fade-in" >
            <div @click="modal_toggle" class="navy pad" >
              <p class="navy mb-4" style="font-size:25px">
                <span @click="modal_toggle" class="close"></span>
                { user }님의 취향분석
              </p>
                
                <p class="navy mb-1" style="font-size:20px;">로맨스</p>
                <div class="navy progress rounded mb-4" style="height: 25px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 75%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
                <p class="navy mb-1" style="font-size:20px;">액션</p>
                <div class="navy progress rounded mb-4" style="height: 25px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 90%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="navy mb-1" style="font-size:20px;">음악</p>
                <div class="navy progress rounded mb-4" style="height: 25px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 35%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="navy mb-1" style="font-size:20px;">공포</p>
                <div class="navy progress rounded mb-4" style="height: 25px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 65%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="navy mb-1" style="font-size:20px;">애니메이션</p>
                <div class="navy progress rounded mb-4" style="height: 25px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 55%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>

              </div>
              <!-- 버튼 -->
              <!-- <div style="display: flex; justify-content: center;"> -->
              <div class="text-center">
                <img class='cat' src="@/assets/nyancat1.gif" alt="">
                <div class='cat-content'>영화 추천받기</div>
              </div>
            </div>
<!-- 모달 끝 -->



    <div v-if='modal==false' class="row">
      <div class="col-lg-4">

<!------- 왼쪽상단 ------->
        <div class="mb-4">
          <div class="text-center navy user">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;">
            <h5 class="my-3 navy">유저네임</h5>
            <p class="mb-1 navy">Full Stack Developer</p>
            <p class="mb-4 navy">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-1">
              <div class=''>
                <img @click='modal_toggle' class='gif' src="@/assets/AI_giphy.gif" alt="">
              </div>
              <!-- <button type="button" class="btn btn-primary">내영화 취향 분석</button> -->
            </div>
            <div>내 취향 분석하기</div>
            
          </div>
        </div>
     </div>


<!------- 우측상단 카드 좋아요 ------->
  <div class="col-lg-8">
    <div class="mb-4">
      <div class="navy pad">
        <div class="row">
          <!-- 상단 4장의 이미지 -->
          <div class="col-md-3" v-for="i in 4" :key="i">
            <div class="card-image" style="height: 200px; background-color: white;"></div>
          </div>
        </div>

        <div class="row mt-4">
          <!-- 하단 4장의 이미지 -->
          <div class="col-md-3" v-for="i in 4" :key="i">
            <div class="card-image" style="height: 200px; background-color: white;"></div>
          </div>
        </div>
      </div>
    </div>







  <!-------- 우측하단 댓글 내역 -------->
        <div class="mb-4 mt-20">
          <div class="navy pad">

            <div class="navy row">
              <div class="navy col-sm-3">
                등록일
              </div>
              <div class="navy col-sm-8">
                댓글내용
              </div>
            </div>
            <hr class=white-hr>

            <div class="navy row">
              <div class="navy col-sm-3">
                <p class="navy mb-0">05-20</p>
              </div>
              <div class="navy col-sm-9">
                <p class="navy mb-0">안녕하세요</p>
              </div>
            </div>
            <hr class=white-hr>



            <div class="navy row">
              <div class="navy col-sm-3">
                <p class="navy mb-0">05-21</p>
              </div>
              <div class="navy col-sm-9">
                <p class="navy mb-0">11111111111111</p>
              </div>
            </div>
            <hr class=white-hr>


            <div class="navy row">
              <div class="navy col-sm-3">
                <p class="navy mb-0">05-22</p>
              </div>
              <div class="navy col-sm-9">
                <p class="navy mb-0">2222222222222222222</p>
              </div>
            </div>
            <hr class=white-hr>


            <div class="navy row">
              <div class="navy col-sm-3">
                <p class="navy mb-0">05-23</p>
              </div>
              <div class="navy col-sm-9">
                <p class="navy mb-0">3333333333333333333333</p>
              </div>
            </div>
            <hr class=white-hr>

            <div class="navy row">
              <div class="navy col-sm-3">
                <p class="navy mb-0">05-24</p>
              </div>
              <div class="navy col-sm-9">
                <p class="navy mb-0">4444444444444444444444</p>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</template>


<script>
import Home01Navbar from '@/components/HOME/Home01Navbar.vue'
export default {
  name: 'MyPageView',
  components:{
    Home01Navbar
    },
  data() {
    return {
      username: 'John Doe',
      email: 'johndoe@example.com',
      modal:false,
      
    };
  },
  methods:{
    modal_toggle() {
      if (this.modal==false) {
    this.modal=true;
    } else{
      this.modal=false;
    }
  },
}}

</script>

<style>
section{
  width:93%;
}

.userprofile{  
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  margin-top: 35px;

}
.title{
  font-size:15px;
  margin: 0;
}

.navy{
  background-color: #212529;
  color: white;
}

.profilecontainer{
  /* background-color: #212529; */
  color: white;
  margin-top: 20px;
}

.white-hr{
  background-color: white;
  height: 1px;
  border:none;
}

.mt-20{
  margin-top: 20px;
}

.pad{
  padding:15px;
  border-radius: 5px;
}

.user{
  height: 400px;
  border-radius: 10px;
}

.gif{
  width: 18%;
  border-radius: 90%;
}

.mt-100{
  margin-top: 100px;
}


.close {width:50px;height: 50px;}
.close:before, .close:after {position: absolute;right: 380px;content:' ';height: 20px;width: 2px;background-color: #ffffff;}
.close:before {transform: rotate(45deg);}
.close:after {transform: rotate(-45deg);}

.cat{
  width:15%;
  border-radius: 30px;
  margin-top: 10px;
}

.cat-content{
  font-size: 17px;
}




@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.modal-content {
  animation: fadeIn 0.5s;
  opacity: 0;
}

.modal-gif{
  animation: fadeOut 2.5s;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  /* width: 1000px;
  height: 500px; */
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>