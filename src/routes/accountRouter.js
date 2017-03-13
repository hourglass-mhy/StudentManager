//处理登录,注册,退出的路由
'use strict'
const express=require('express')
const path =require('path')

//创建路由
const accountRouter=express.Router()

//导出控制器
const accountController=require(path.join(__dirname,'../controllers/accountController.js'))
//获取登录页面
accountRouter.get('/login',accountController.getLoginPage)
//获取登录信息,查询数据库进行匹配 post提交
accountRouter.post('/login',accountController.getLogin)


//导出模块
module.exports=accountRouter
