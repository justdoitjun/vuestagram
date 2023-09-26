<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" >Next</li>
      <li v-if="step==2" @click="publish">Next</li>
    </ul>
    
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- vueX의 데이터 바인딩하는 방법은 $ 달러 표시를 사용 -->
  <h4> Hello {{ $store.state.name }}</h4>
  <!-- 아래와 같이 주석처리된 방법은 좋지 않고 지양한다. -->
  <!-- <button @click="$store.state.name = '박'"> 버튼</button> -->
  <!-- VueX 이벤트 핸들러
      (1) mutatiosn의 함수는 commit()을 쓴다.
      (2) VueX는 $ 달러표시를 쓴다. 
      (3) actions의 함수는 dispatch()를 쓴다. 
  -->
  <button @click="$store.commit('이름변경')"> button </button>

  <h4> Hi {{ store.state.age }}</h4>
  <!-- 
    '나이증가' 옆에 data를 넣어주면 payload라고 해서 이게 store.js로 넘어감
  -->
  <button @click="$store.commit('나이증가', 10)"> button </button>

  <!-- vueX 국룰 
    오만가지의 컴포넌트에서 가져다 쓸 수 있기 때문에 
    상태변경을 할 때는 컴포넌트에서 직접하면 안됨. state 수정시
    1. 미리 store.js에 수정방법을 정의해두고
    2. 그 방법을 컴포넌트에서 소환해서 수정해야함. 
  -->

  <p> {{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')"> 더보기 버튼 </button>


  <VueContainer :게시물="게시물" :step="step"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- multiple 속성 넣으면 여러 개의 파일을 넣을 수 있다. -->
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template> 

<script>
// import 3스텝
import VueContainer from './components/VueContainer.vue';
import postdata from './assets/postdata';
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      //변수 선언
      step : 0, //현재 페이지의 step 은 0
      게시물 : postdata,
      이미지 : '',
    }
  },
  components: {
    //둘 다 표기법 가능
    //Container : Container,
    VueContainer,
  },
  ////더보기에 대한 사용자 정의함수
  methods:{
    more(){
      axios.get('https://codingapple1.github.io/vue/more1.json')
          .then((data)=>{
            //alert('success');
            console.log(data);
            console.log(data.data);
            this.게시물.push(data.data);
          })
    },
    publish(){
      let 내게시물 = {
        name : 'Junhyeok Choi',
        userImage : 'https://placeimg.com/100/100/arch',
        postImage : '',
        line : 36,
        date : 'May 15',
        id : 'justdoitjun',
        liked : false,
        content : 'nothing',
        filter : 'perpetua',
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    },
    write(){

    },
    upload(e){
      //target에 있는 모든 파일들을 e.target.files
      let 파일 = e.target.files;
      console.log(파일[0]);
      console.log(파일[0].type);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      //다음페이지
      this.step = 1;
    },
 
  },
  //상위 데이터를 하위 데이터로 넣어주는 방법은 props하나.. 2단계 내려가야하면 props 2번
  //하위 컴포넌트의 데이터를 상위 컴포넌트로 보내주는 것은 custom event
  //정 아니면 mitt를 씀. 

  //싫으면 Vuex를 쓴다. => 데이터 저장공간
  //Vuex를 쓰면 모든 컴포너트를 직접 꺼내다 쓸 수 있음. 
  props : {
    //다 중요해보이는 변수는 그냥 최상단 컨테이너에 저장하는 게 좋음 
    //변수명 : 자료형태

    step : Number,
    게시물 : Array,

  },
}
</script>

<style>
 
 body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
