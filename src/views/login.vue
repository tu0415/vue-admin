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
import { ref, reactive } from "@vue/composition-api";
export default {
    // data() {},
    setup(props,{refs}) {
         let data = reactive({
            ruleForm: {
                account: "111",
                password: ""
            },
            rules: {
                account: [{ validator: validateAccount, trigger: "blur" }],
                password: [{ validator: validatePassword, trigger: "blur" }]
            }
        });
        let validateAccount = (rule, value, callback) => {
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
            } else if (!data.ruleForm.account) {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };

        const submitForm = ( (formName)=>{
            console.log(formName)
            refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    return false;
                }
            });
        })

        return {
            data,
            submitForm
        };
    },
    methods:{
        aa() {
            
        }
    }
   
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
        margin-top: 20px;
    }
}
</style>

