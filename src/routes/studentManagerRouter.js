//处理登录,注册,退出的路由
'use strict'
const express=require('express')
const path =require('path')

//创建路由
const studentManagerRouter=express.Router()

//导出控制器
const studentManagerController=require(path.join(__dirname,'../controllers/studentManagerController.js'))
//获取学生管理系统页面
studentManagerRouter.get('/list',studentManagerController.getStudentList)

//导出模块
module.exports=studentManagerRouter
