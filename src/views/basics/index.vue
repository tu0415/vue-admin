<template>
    <div id="index" :class="[menuStatus ? 'close':'open']">
       <leftNav></leftNav>
       <heardNav></heardNav>
       <mainCount></mainCount>
    </div>
</template>

<script>
import leftNav from "@/components/leftNav";
import heardNav from "@/components/heardNav";
import mainCount from "@/components/mainCount";
import { computed } from "@vue/composition-api";

export default {
    name:'index',
    components:{leftNav,heardNav,mainCount},
    setup(props,{root}) {
         let menuStatus = computed(()=> root.$store.state.isCollapse)
        return {
            menuStatus
        };
    },
   
};
</script>

<style lang="scss" scoped>

</style>

