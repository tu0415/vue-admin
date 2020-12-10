<template>
    <div class="login bold cfff">
        <h2>登 录</h2>
        <div class="login-warp">
            <el-form :model="data.ruleForm" status-icon :rules="data.rules" ref="ruleForm" class="demo-ruleForm">
                <label for="">账号</label>
                <el-form-item label="" prop="account">
                    <el-input type="text" v-model="data.ruleForm.account" placeholder="请输入账号" autocomplete="off"></el-input>
                </el-form-item>

                <label for="">密码</label>
                <el-form-item label="" prop="password">
                    <el-input type="password" v-model="data.ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" class="block w100 login-btn" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    // data() {},
    setup(props,{refs}) {
         let validateAccount = (rule, value, callback) => {
            console.log(rule)
            if (value === "") {
                callback(new Error("请输入账号 "));
            } else {
                if (data.ruleForm.account == "") {
                    callback(new Error("请输入账号 "));
                }
                callback();
            }
        };
        let validatePassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (!data.ruleForm.password) {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
         let data = reactive({
           ruleForm:{
                account: "",
                password: "",
           },
            rules: {
                account: [{ validator: validateAccount, trigger: "blur" }],
                password: [{ validator: validatePassword, trigger: "blur" }]
            }
        });

        const submitForm = ( (formName)=>{
            refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    return false;
                }
            });
        })

        onMounted(()=>{
            aa()
        })

         const aa =  (async () =>{
           let data = await quest(Api.login.login,'post')
           console.log(data)
        })
        return {
            submitForm,
            data,
            aa,
        };
    },
   
};
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    background-color: #344a5f;
    h2 {
        font-size: 28px;
        text-align: center;
    }
    .login-warp {
        margin: 0 auto;
        width: 330px;
    }
    label {
        display: block;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .login-btn {
        margin-top: 2rem;
    }
}
</style>

