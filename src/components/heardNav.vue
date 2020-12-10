<template>
    <div class="heardNav">
       1111
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name:'leftNav',
    // data() {},
    setup(props,{refs}) {
         
         let data = reactive({
           
        });

        onMounted(()=>{
            // aa()
        })

         const aa =  (async () =>{
           let data = await quest(Api.login.login)
           console.log(data)
        })
        return {
            
        };
    },
};
</script>

<style lang="scss" scoped>
.heardNav {
    position: fixed;
    left: 250px;
    top: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    -moz-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    -o-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
}
</style>

