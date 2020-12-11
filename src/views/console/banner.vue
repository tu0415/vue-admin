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
            getDataEvt()
        })

          const getDataEvt = (async () => {
            let parament = {
                page: 2,
                limit: 10
            }
            const data = await quest(Api.user.userListAjax,'get',{page:1})
            console.log(data)
        })
        return {
            getDataEvt,
        };
    },
   
};
</script>

<style lang="scss" scoped>

</style>

