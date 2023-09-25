<template>
    <div class="post">
        <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{ 게시물.name }}</span>
        </div>
        <!-- 이미지 url 넣는 방법-->
        <!-- 
          html의 속성에 데이터바인딩을 쓰고 싶으면
          그냥 style="" 이렇게 하면 안되고
          :style="" 이렇게 콜론을 넣어줘야함
        -->
        <div class="post-body" :style='{backgorundImage : `url(${게시물.postImage})`}'></div>
        <div class="post-content">
        <p>{{ 게시물.likes }} Likes</p>
        <p><strong>{{ 게시물.id }}</strong> {{ 게시물.content }}</p>
        <p class="date">{{ 게시물.date }}</p>
        </div>
    </div> 
</template>

<script>

export default {
    setup() {
        
    },
    /// (1) 위에서 준 props를 받을 준비해야지
    props : {
      게시물 : Object,
    }
}
</script>


<style>
    .post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>

