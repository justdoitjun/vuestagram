import { createStore } from 'vuex';
import { axios }from 'axios';

const store = createStore({
    // (1) 데이터라는 말 대신 vuex를 쓰면 state라고 하겠음. 
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            좋아요눌렀니 : false,
            more : {},
        }
    },
    // (데이터를 수정하는 방법을 미리 정의해두고 이를 호출해서 씀)
    ////아래 mutations 에 모든 것들을 다 정의해두고 쓴다 .
    //(1)추가적으로 this.name this.변수 이렇게 쓰지 않는다 
    //// state(데이터)의 정보를 바꿀 때는 state라고 지칭해서 쓴다. vuex는
    mutations : {
        이름변경(state){
            state.name = 'park';
        },
        나이증가(state , payload){
            state.age += payload;
        },
        setMore(state, data){
            state.more = data;
        },
    }, 
    ////VueX에서 ajax로 요청하고 싶을 때 혹은 오래걸리는 작업들은 다 여기임. 
    ////물론 mutations 안에다 axios 요청해도 되지 않을까 싶은데 안된다. 
    ///왜냐면 순차적으로 state 변경하고 싶은데 ajax가 오래 걸리고 요청하는데 시간을 다 계산해야함
    //즉, 데이터 바꿔주고 가져오고 하는 건 다 똑같은데 시간이 오래걸릴까봐 mutation 씀
    /////state 변경은 무조건!!!! mutations임. 오래 걸리는 것만 actions인데
    ///그냥 ajax = actions라고 기억
    actions : {
        ///actions의 파라미터는 무조건 context라고 작명해서 씀. 귀찮으면 store라고 해도 됨.
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more1.json')
            .then((data)=>{
                console.log(data);
                // 똑같이 mutation 호출은 commit 함수임.  
                context.commit('setMore', data.data);
            }).error((data)=>{

            })

        },
       
    }

})



export default store;