<template>
    <div class="index">
        <el-form :inline="true" :model="data.formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="data.formInline.user" placeholder="请输入名称(键)"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button size="small" type="primary" icon="el-icon-plus"></el-button>
            <el-button size="small" type="primary" icon="el-icon-minus"></el-button>
            <el-button size="small" type="primary" icon="el-icon-delete"></el-button>
        </div>
        <div class="tableData">
            <el-table ref="multipleTable" :data="data.tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="ID" width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column prop="name" label="名称（键）" width="120">
                </el-table-column>
                <el-table-column prop="address" label="值" >
                </el-table-column>
                 <el-table-column prop="address" label="备注" >
                </el-table-column>
                 <el-table-column prop="address" label="修改人" >
                </el-table-column>
                 <el-table-column prop="address" label="修改时间" >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import Api from '@/api/index'
import quest from '@/request/request'

export default {
    name: 'index',
    setup(props, { refs }) {
        let data = reactive({
            formInline: {
                user: '',
                region: ''
            },
            tableData: []
        });

        onMounted(() => {
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

        const onSubmit = (async () => {
            // let data = await quest(Api.login.login)
           
        })

         const handleSelectionChange = (async () => {
            let data = await quest(Api.login.login)
            // console.log(data)
        })
        return {
            data,
            onSubmit,
            handleSelectionChange,
            getDataEvt
        };
    },

};
</script>

<style lang="scss" scoped>
.tableData {
    margin-top: 20px;
}
</style>

