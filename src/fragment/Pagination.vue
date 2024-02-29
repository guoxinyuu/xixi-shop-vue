<template>
	<div v-if="tableData.total > 0" class="vue-pagination">
		<el-pagination
			:page-sizes="[5, 10, 20, 50]"
			:page-size="tableData.pageSize"
			:total="tableData.total"
			:current-page.sync="tableData.pageNum"
			layout="total, sizes, prev, pager, next, jumper"
			@size-change="changePageSize"
			@current-change="changeCurrentPage"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
	name: "Pagination",
	// 使用 props 属性接收父组件传递的参数
	props: {
		tableData: {
			type: Object,
			default: {
				total: 5, // 总数据量
				pageNum: 1, // 当前页
				pageSize: 5, // 页长
				pages: 1, // 总页数
			},
		},
	},
	methods: {
		changePageSize: function (obj) {
			// 改变页长，通过 $emit 函数，将页长传递给父组件
			this.tableData.pageSize = obj;
			this.$emit("emitPageData", {
				pageSize: this.tableData.pageSize,
				pageNum: this.tableData.pageNum,
			});
		},
		changeCurrentPage: function (obj) {
			// 改变当前页，通过 $emit 函数，将当前页传递给父组件
			this.tableData.pageNum = obj;
			this.$emit("emitPageData", {
				pageSize: this.tableData.pageSize,
				pageNum: this.tableData.pageNum,
			});
		},
	},
};
</script>

<style>
.vue-pagination {
	margin-top: 5px;
	float: right;
}
</style>
