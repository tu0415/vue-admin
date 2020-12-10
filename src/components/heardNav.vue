<template>
    <div class="heardNav">
        <div class=" heard">
            <i class="el-icon-menu icon  f28 "></i>
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
    setup(props, { refs }) {

        let data = reactive({

        });

        onMounted(() => {
            // aa()
        })

        const aa = (async () => {
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
    height: 100px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
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
</style>

