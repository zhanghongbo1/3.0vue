<template>
    <div class="show">
        <div class="tell">
            <span class="num">{{arr.length}}</span>
            <span>&nbsp;&nbsp;条评论</span>
        </div>
        
        <div class="content">
            <div class="details" v-for="(item,index) in arr" :key="index">
                <img src="@/assets/img/head.png" alt="头像" title="头像">
                <div>
                    <p class="name">{{item.name}}</p>
                    <p class="text">{{item.info}}</p>
                    <p class="all">
                        <span>time</span>
                        <svg t="1581649547032" class="icon" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2035" width="200" height="200"><path d="M1060.927153 677.264587v-5.827486c1.618746-6.798734 3.561241-13.273718 5.179987-19.424953s2.266245-9.064978 3.237493-13.597467l2.589993-9.388727c0-4.20874 2.266245-8.41748 3.237492-12.62622l2.913743-11.654972c0-4.532489 2.266245-8.741229 3.237493-12.949968v-5.827486c0-4.856238 2.266245-9.712477 3.561241-14.244966v-3.237492l2.913743-12.30247v-3.237493c0-4.20874 1.618746-7.769981 2.266244-10.683724 9.388727-42.087398 16.187461-95.18227-15.216213-134.355925a135.974672 135.974672 0 0 0-113.312226-42.411148h-291.374297a12.949969 12.949969 0 0 1-12.949968-12.949969V91.278502A94.211023 94.211023 0 0 0 572.389582 1.276219a104.570998 104.570998 0 0 0-117.520966 77.376064l-4.20874 12.30247-97.124765 295.906785a18.453705 18.453705 0 0 1-16.834959 12.302471l-323.749219 1.618746a13.597467 13.597467 0 0 0-12.949969 13.273718v596.993558a12.949969 12.949969 0 0 0 12.949969 12.949969h938.872733a17.482458 17.482458 0 0 0 16.187461-12.62622v-4.856238c1.942495-6.798734 4.856238-18.129956 6.798734-24.92869 0 0 38.202408-142.449656 70.901079-267.093105l2.589993-10.036225 2.913743-11.007474z m-150.543387 252.200641a17.158709 17.158709 0 0 1-16.187461 12.62622H97.12573a12.949969 12.949969 0 0 1-12.949969-12.949969V494.346279a12.949969 12.949969 0 0 1 12.949969-12.949969h302.058021a20.072452 20.072452 0 0 0 17.158708-12.626219l92.592277-281.98557 22.986194-70.25358a126.262195 126.262195 0 0 1 10.683724-23.309944 22.986194 22.986194 0 0 1 22.014947-10.359975 29.461179 29.461179 0 0 1 10.683724 3.884991 45.972389 45.972389 0 0 1 4.856239 18.777455v328.929205a12.949969 12.949969 0 0 0 12.949968 12.949969H979.34235a112.664728 112.664728 0 0 1 32.374922 8.093731s3.237492 0 3.88499 2.913743 9.064978 22.662445 0 64.749843l-2.589993 12.302471c-19.748702 85.469794-102.628502 394.974046-102.628503 394.974046z" p-id="2036"></path><path d="M254.144101 455.496373h80.937304v528.034975h-80.937304z" p-id="2037"></path></svg>
                        <span>10</span>
                    </p>
                </div>
            </div>

        
        </div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props:{
        arr1:Array
    },
    data() {
        return {
            name:'',
            // arr:[]
           
        }
    },
    computed: {
    ...mapState({
        arr:state=>state.show.message
    })
    },
    mounted() {
   
    this.$store.dispatch('show/getmes')
    // this.$axios.post('/getmes').then(res=>{
    //     console.log(res)
    //     this.arr=res.allmes
    // })

 
    },
}
</script>


<style lang="scss">
.show{
    background: white;
    border-radius: 4px;
    padding-top: 2px;
    .tell{
        background: #ccc;
        border-radius:4px;
        margin-top: 10px;
        width: 110px;
        height: 50px;
        line-height: 50px;
        margin-left:  5px;
      
        .num{
            color: red;
        }
        span{
            font-size: 20px
        }
    }
    .name{
        font-size: 20px;
        font-weight: 600;
        color: red;
    }
    p{
        margin: 10px 0;
        svg{
            width: 14px;
            height: 14px;
            margin-left: 15px;
            cursor: pointer;
        }
    }
    .details{
        display: flex;
        align-items: center;
        border-top: 1px solid #000;
        margin-top: 5px;
        .text{
            font-weight: 600;
        }
        img{
            height: 90px;
            width: 80px;
            border-radius: 4px;
            margin-right: 20px;
        }
    }
    .all{
        display: flex;
        align-items: center;
    }
}
    
</style>