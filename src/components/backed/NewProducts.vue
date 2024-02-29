<template>
    <div class="table_div">
        <div class="table_head">
            <!-- 
                @keyup.native ---- 键盘松开事件
				@keyup.enter.native ---- 回车事件
             -->
			<el-input
				v-model="search.keyword"
				placeholder="关键字查询"
				class="filter-item"
				@keyup.enter.native="initTableData"
				@keyup.native="initTableData"
                style="width: 200px;margin-right: 20px;"
			/>
			<el-button class="button-item" type="primary" icon="el-icon-plus" title="" @click="addModel()">新增</el-button>
        </div>
        <el-table 
        :data="tableData.list"
        border
        highlight-current-row
        style="width: 100%;margin-top: 10px">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="newProductName" label="新品名称" width="200"></el-table-column>
            <el-table-column prop="newProductImg" label="新品图片" width="150"></el-table-column>
            <el-table-column prop="newPproductPrice" label="新品价格" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="editModel(scope.row)" type="primary" size="small">编辑</el-button>
                <el-button @click="editModel(scope.row)" type="danger" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default{
    name:"HotProduct",
    data(){
        return{
            search: {
				currentPage: 1,
				pageSize: 5,
				sort: "id",
				direction: "desc",
				keyword: "",
			},
            tableData:{

            }
        }
    }
}
</script>
<style>
.table_div{
    margin-top: 20px;
}
</style>