<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <VueContainer :게시물="게시물" :step="step"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
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
      step : 0,
      게시물 : postdata,
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
    props : {
      //다 중요해보이는 변수는 그냥 최상단 컨테이너에 저장하는 게 좋음 
      step : step,
    },
  }
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
