<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="activeIndex" router class="el-menu-vertical-demo" 
    @open="handleOpen" @close="handleClose" :collapse="this.$VuexStore.state.collapse">
        
        <el-menu-item index="/manage">
            <i class="el-icon-user-solid"></i>
            <span slot="title">员工管理</span>
        </el-menu-item>
        <el-submenu index="/productManage">
            <template slot="title">
                <i class="el-icon-cherry"></i>
                <span slot="title">商品管理</span>
            </template>
            <el-menu-item index="1-4-1">商品种类</el-menu-item>
            <el-menu-item index="/productManage/products">全部商品</el-menu-item>
            <el-menu-item index="/productManage/hotProducts">热销商品</el-menu-item>
            <el-menu-item index="/productManage/newProducts">新品管理</el-menu-item>
            
        </el-submenu>
        <el-menu-item index="/order" >
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-picture"></i>
            <span slot="title">轮播图管理</span>
        </el-menu-item>
    </el-menu>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    name:"Menu",
    data() {
      return {
        activeIndex:'this.$router.path'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>