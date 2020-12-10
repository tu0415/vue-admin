<template>
    <div class="leftNav">
        <div class="logo"><img class="" src="../../src/assets/logo.png" alt="" srcset=""></div>
        <el-menu default-active="1-4-1" background-color="transparent" text-color="#fff" active-text-color="#fff" class="el-menu-vertical-demo" router unique-opened @open="handleOpen" @close="handleClose" :collapse="data.isCollapse">
            <template v-for="(item,i) in data.routes">
                <el-submenu v-if="!item.hidden" :key="i" :index="i + ''">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>

                    <template v-for="(subItem,index) in item.children">
                        <el-menu-item :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { ref, reactive, onMounted,computed } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name: 'leftNav',
    // data() {},
    setup(props, { root }) {
        let data = reactive({
            isCollapse: false,
            routes: root.$router.options.routes
        });
        console.log(root.$store.state.isCollapse)

        data.isCollapse = computed(()=>root.$store.state.isCollapse)
        const handleOpen = (() => {

        })

        const handleClose = (() => {

        })
       
        onMounted(() => {
            // aa()
        })

        const aa = (async () => {
            let data = await quest(Api.login.login)
            console.log(data)
        })
        return {
            data,
            handleOpen,
            handleClose,
        };
    },

};
</script>


<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.leftNav {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    background-color: #344a5f;
    @include webkit( transition,all .3s ease 0s);
    .logo {
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 90px;
            height: auto;
        }
    }
}

.open {
    .leftNav {
        width: 250px;
    }
}
.close {
    .leftNav {
        width: 64px;
    }
    .logo {
        img {
            width: 24px;
            
        }
    }
}
</style>

