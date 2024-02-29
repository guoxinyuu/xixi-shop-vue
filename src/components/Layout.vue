<template>
    <el-container class="vue-container">
        <el-header class="vue-header"><Head :manager="manager"/></el-header>
        <el-container>
            <el-aside :style="{
                width: this.$VuexStore.state.collapse ? '65px' : '200px',}"
                class="vue-sidebar">
                <Menu :menus="menus"/>
            </el-aside>
            <el-container>
                <el-main>
                    <!-- 面包屑导航 -->
                    <BreadCrumb />
                    <!-- 将manager传递给子组件 -->
                    <router-view :manager="manager"/>
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import Head from "@/fragment/Head.vue";
import Menu from "@/fragment/Menu.vue";
import BreadCrumb from "@/fragment/BreadCrumb.vue";
export default{
    name:"Layout",
    components:{
    Head,
    Menu,
    BreadCrumb
    },
    data:function(){
        return{
            manager:this.manage,
            menus: [],
        }
    },
    methods: {
    // 初始化 user 信息
    initUser: function () {
        this.$http.get('/api/manage/getOne/1')
        .then(res=>{
            if(res.data.code===200){
                const manage=res.data.data.manage
            }
        })

    },
  },
  mounted: function () {
    this.initUser();
  },
}
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* ======== 自定义 ======== */
.vue-container {
  /* font-family: "monaco";
	font-size: 13px; */
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.vue-header {
  padding: 0;
  z-index: 1000;
}
.vue-footer {
  line-height: 40px;
  background: #dcddd8;
  display: block;
  float: right;
}
</style>
