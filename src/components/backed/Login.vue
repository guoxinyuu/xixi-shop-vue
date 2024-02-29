<template>
    <div class="login-wrapper">
        <div class="login-main">
			<h3 class="login-title">xixi后台管理</h3>
            <el-form :model="manager" :rules="rules" >
                <el-form-item prop="managePhone">
                    <el-input v-model="manager.managePhone" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="manager.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="login()">登录</el-button>
                    <el-button class="forget-password-btn" @click="gotoForgetPassword">忘记密码?</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>

<script>
import { axios } from "axios";
export default{
    name:'Login',
    data:function(){
        return{
            manager:{
                managePhone:"",
                password:""
            },
            rules:{
                managePhone: [
					{
						required: true,
						message: "请输入手机号",
						trigger: ["blur", "change"],
					},
				],
				password: [
					{
						required: true,
						message: "请输入密码",
						trigger: ["blur", "change"],
					},
				],
            }
        }
    },
    methods:{
		//后台登录
        login(){
			const this_=this;
            this.$http.post('/api/manage/login',this.manager).then(function(res){
                if(res.data.code===200){
					const manager=res.data.data.manager
					localStorage.setItem("token",res.data.data.token)
					localStorage.setItem("managerId",manager.id)
					localStorage.setItem("managerName",manager.manageName)
					this_.$router.push("/index")
                    console.log(res)
                }else{
                    console.log(res.data.message)
                }
            })
        },
		gotoForgetPassword(){

		}
    },
	mounted(){
		// this.login();
	}
	
}
</script>
<style scoped lang="less">
.login-wrapper {
	height: 100vh; /* 使用视口高度作为容器的高度 */
	//background: #f7f7f7;
	background-image: url("@/assets/img/login.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
#canvas {
	width: 100%;
}
.login-main {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 320px;
	height: 370px;
	padding: 20px 35px;
	border: 1px solid #eee;
	margin: -185px 0 0 -160px;
	&::before,
	&::after {
		position: absolute;
		height: 12px;
		content: "";
	}
	&::before {
		left: 4px;
		right: 4px;
		top: -12px;
		z-index: 2;
		background-color: #f5f5f5;
	}
	&::after {
		left: 10px;
		right: 10px;
		top: -22px;
		z-index: 1;
		background-color: #f0f0f0;
	}
}
.login-title {
	padding-bottom: 15px;
	border-bottom: 2px solid #459f75;
	margin: 15px 0 45px 0;
	color: #555;
	text-align: center;
	font-size: 30px;
}
.login-btn {
	width: 100%;
	height: 36px;
	margin-top: 30px;
	font-size: 16px;
}
.login-tip {
	color: #999;
	font-size: 12px;
	line-height: 30px;
}
.login-anim {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: -1;
}
.forget-password-btn {
	display: block;
	margin: 0 auto;
	font-size: 12px; /* 设置按钮字体大小为 14 像素 */
}
</style>