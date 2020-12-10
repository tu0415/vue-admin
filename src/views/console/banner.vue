<template>
    <div class="banner">
       banner
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name:'banner',
    // components:{leftNav,heardNav,mainCount},
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

