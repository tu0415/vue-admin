<template>
    <div class="mainCount">
          <router-view />
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
@import "../assets/scss/config.scss";
.mainCount {
    position: fixed;
    left: 250px;
    top: 100px;
    right: 0;
    height: calc(100vh - 100px);
    padding: 30px 30px;
    border: 30px solid #f7f7f7;
    // border-bottom: none;
    box-sizing: border-box;
    @include webkit( transition,all .3s ease 0s);
}

.open {
    .mainCount {
        left: 250px;
    }
}
.close {
    .mainCount {
        left: 64px;
    }
}
</style>

