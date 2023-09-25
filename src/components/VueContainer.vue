<template>
    <div>
        <!-- 
            <props 사용방법>
                (1) 우선 exports에 props 적어주고
            props 상위 컴포넌트에서 온 데이터들을 내려줄 땐
            :작명="props변수" 이렇게 써주면 된다. 
        -->
        <!-- <VuePost :게시물="게시물[0]"/>
        <VuePost :게시물="게시물[1]"/> -->
        <VuePost :게시물="게시물[i]" v-for="(obj,i) in 게시물" :key="i"/>
        <!-- <VuePost/>
        <VuePost/> -->
        

        <!-- (1) 컴포넌트에 직접 아래같이 v-if v-for 적는 것은 금지됨. -->
        <!-- <Post v-if="step == 0":게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" /> -->
        <!-- (2) div태그에 대신 넣어주면 된다. -->
        <div v-if="step == 0">
            <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
        </div>

        <!-- 필터선택페이지 -->
        <div class="upload-image"></div>
        <div v-if="step == 1" class="filters">
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
        </div>

        <!-- 글작성페이지 -->
        <div class="upload-image"></div>
        <div v-if="step == 2" class="write">
            <textarea class="write-box">write!</textarea>
        </div>    
    </div>
</template>

<script>
import VuePost from './VuePost.vue';

export default {
    components : {
        VuePost,
    },
    //상위 컴포넌트에서 하위 컴포넌트(1단계 아래)로 오려면
    props : {
        
        //게시물이라는 Key값의 종류를 정해주자. 
        게시물 : Array,
        step : step,
    }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
