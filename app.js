'use strict'

//app.js: 负责主路由的分配  入口文件
const express=require('express')
const app=express()
const path=require('path')

//处理静态资源
app.use(express.static(path.join(__dirname,'src/statics')))



//导出路由
const accountRouter=require(path.join(__dirname,'src/routes/accountRouter.js'))
//账户路由入口
app.use('/account',accountRouter)


//启动服务器
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err)
  }
  console.log('start success')
})
