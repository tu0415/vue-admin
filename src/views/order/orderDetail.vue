<template>
    <div class="index">
       orderDetail
    </div>
</template>

<script>
import leftNav from "@/components/leftNav";
import heardNav from "@/components/heardNav";
import mainCount from "@/components/mainCount";
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name:'index',
    components:{leftNav,heardNav,mainCount},
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

