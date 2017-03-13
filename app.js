'use strict'

//app.js: 负责主路由的分配  入口文件
const express=require('express')
const app=express()
const path=require('path')

const bodyParser=require('body-parser')
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

//处理静态资源
app.use(express.static(path.join(__dirname,'src/statics')))



//导出路由
const accountRouter=require(path.join(__dirname,'src/routes/accountRouter.js'))
const studentManagerRouter=require(path.join(__dirname,'src//routes/studentManagerRouter.js'))
//登录页面 路由入口
app.use('/account',accountRouter)
//处理学生管理系统的路由
app.use('/studentmanager',studentManagerRouter)


//启动服务器
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err)
  }
  console.log('start success')
})
