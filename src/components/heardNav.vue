<template>
    <div class="heardNav">
        <div class=" heard">
            <i @click="navMenuStaus" class="el-icon-menu icon  f28 "></i>
            <div class="heard-right">
                <div class="user-info ">
                    <img src="../assets/images/user.jpg" alt="">
                     <span>管理员</span>
                </div>
                <i class="el-icon-switch-button icon  f28 "></i>
            </div>
        </div>
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
        const navMenuStaus = (()=>{
            root.$store.commit('SET_ISCOLLAPSE')
        })
        return {
            navMenuStaus
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.heardNav {
    position: fixed;
    left: 250px;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100px;
    background-color: #fff;
     @include webkit( transition,all .3s ease 0s);
     @include webkit( box-shadow,0 3px 16px 0 rgba(0, 0, 0, 0.1));
    .heard {
        padding: 0 32px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon {
            cursor: pointer;
        }
        .heard-right {
            display: flex;
            align-items: center;
            .user-info {
                 display: flex;
                align-items: center;
                 margin-right: 30px;
                img {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    margin-right: 10px;
                   
                }
            }
        }
    }
}

.open {
    .heardNav {
        left: 250px;
    }
}
.close {
    .heardNav {
        left: 64px;
    }
}

</style>

