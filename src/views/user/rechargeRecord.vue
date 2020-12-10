<template>
    <div class="index">
       会员管理
    </div>
</template>

<script>

import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name:'index',
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

</style>

