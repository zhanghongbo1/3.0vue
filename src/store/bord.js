// export const show= {
//     namespaced: true,
//     state:{
//      dig:false   
//     },
//     mutations: {
//         digchange(state){
//             state.dig=true
//         }
//     },

// }
import myaxios from '@/assets/request'
export const show = {
    namespaced: true,
    state: {
        dig: false,
        message:[]
    },
    mutations: {
        digchange(state) {
            state.dig = !state.dig
        },
        mesChange(state,val){
            state.message=val
        },
        mes(state,val){
            state.message=val
        }
     
    },
    actions: { // 声明 actions 动作对象 进行业务处理
         getMessage({commit},val){
           
          myaxios.post("/message", {
                  info: val['val']
                }).then(res=>{
                    if(res.code=200){
                        val['this'].$message( {message: '提交成功',
                        type: 'success'})
                    }
                    commit('mesChange',res.data.allmes)
                })
         
        },
        getmes({commit}){
             myaxios.post('/getmes').then(res=>{
        //console.log(res)
        //this.arr=res.allmes
        commit('mes',res.allmes)
    })
        }
    }
};

