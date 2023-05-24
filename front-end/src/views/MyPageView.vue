<template>
  <div class="background">
    <div class="container">
      <Home01Navbar/>
<section class='background'>
  <div class="profilecontainer">
    
      <div class="userprofile">
        Information

      </div>


<!------- 왼쪽상단 ------->
    <div class="row">
      <div class="col-lg-4">
        <div class="mb-4">
          <div class="text-center navy user">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;">
            <h5 class="my-3 navy">유저네임</h5>
            <p class="mb-1 navy">Full Stack Developer</p>
            <p class="mb-4 navy">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Follow</button>
            </div>
            
          </div>
        </div>


<!------- 왼쪽하단 ------->
        <div class="navy card mb-lg-0">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-2">
              <li class="navy list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">https://mdbootstrap.com</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                <p class="mb-0">@mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>




<!------- 우측상단 ------->
      <div class="col-lg-8">
        <!------- 우측하단 ------->
        <div class="row">

            <div class="mb-4 mb-md-0">
              <div class="navy pad">
                <p class="navy mb-4" style="font-size:25px">
                  좋아요한 영화
                </p>
                <p class="navy mb-1" style="font-size:15px;">로맨스</p>
                <div class="navy progress rounded mb-4" style="height: 6px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p class="navy mb-1" style="font-size:15px;">액션</p>
                <div class="navy progress rounded mb-4" style="height: 6px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
                <p class="navy mb-1" style="font-size:15px;">음악</p>
                <div class="navy progress rounded mb-4" style="height: 6px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
                <p class="navy mb-1" style="font-size:15px;">공포</p>
                <div class="navy progress rounded mb-4" style="height: 6px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
                <p class="navy mb-1" style="font-size:15px;">애니메이션</p>
                <div class="navy progress rounded mb-2" style="height: 6px;">
                  <div class="navy progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          
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
      // profileImage: require('@/assets/profile.jpg'),
      favoriteMovies: [
        { id: 1, title: '영화 제목 1' },
        { id: 2, title: '영화 제목 2' },
        { id: 3, title: '영화 제목 3' },
        { id: 4, title: '영화 제목 4' },
        { id: 5, title: '영화 제목 5' },
        { id: 6, title: '영화 제목 6' },
      ],
      comments: [
        { id: 1, text: '댓글 내용 1' },
        { id: 2, text: '댓글 내용 2' },
        { id: 3, text: '댓글 내용 3' },
        { id: 4, text: '댓글 내용 4' },
        { id: 5, text: '댓글 내용 5' },
      ],
    };
  },
};
</script>

<style>
section{
  width:93%;
}

.userprofile{  
  /* background-color: #212529; */
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  margin-top: 35px;
  /* border: solid white 1px; */
  /* border-radius: 10%; */
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
  border-radius: 3%;
}

.user{
  height: 380px;
  border-radius: 3%;
}

</style>