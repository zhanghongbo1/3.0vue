import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";
// console.log(process.env.VUE_APP_BASE_API)
 function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}
 function post(url, params) {
   //console.log(process.env.VUE_APP_BASE_API)
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default {
    get,
    post

}