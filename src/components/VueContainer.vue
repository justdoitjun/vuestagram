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
    }
}
</script>

<style>
</style>
