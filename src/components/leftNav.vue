<template>
    <div class="leftNav">
        <el-menu default-active="1-4-1" background-color="#344a5f" text-color="#fff" active-text-color="#fff" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="data.isCollapse">
            <template v-for="(item,i) in data.routes">
                <el-submenu v-if="!item.hidden" :key="i" :index="i + ''">
                    <template slot="title">
                        <i class="el-icon-location"></i>
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
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name: 'leftNav',
    // data() {},
    setup(props, { root }) {
        console.log(root.$router.options.routes)
        let data = reactive({
            isCollapse: false,
            routes: root.$router.options.routes
        });

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
.leftNav {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    background-color: #344a5f;
}
</style>

