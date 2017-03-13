//账户路由的控制器

//1.获取登录页面
const fs= require('fs')
const path=require('path')

//2.创建数据库终端
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject';

//该方法负责读取登录页面
exports.getLoginPage=(req,res)=>{
  fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
    if (err) {
      console.log(err)
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(data)
  })
}
//该方法负责获取登录提交的用户信息  查询数据库
exports.getLogin=(req,res)=>{
  console.log(req.body)//获取表单提交的数据
  //连接数据库,查询用户是否存在
  MongoClient.connect(url, function(err, db) {
     const collection = db.collection('account')
      collection.find({ //根据表单提交的数据,查找数据库
        username:req.body.uname,
        pwd:req.body.pwd
      }).toArray(function(err, docs) {
       if(docs.length!=0) { //找到数据  跳转到学生管理系统
         res.end('login ok')
       }else {  //没有找到数据  跳转到登录页面,给予提示信息 返回一段js脚本,浏览器解析执行
        res.end("<script>alert('用户名或者密码不正确');window.location.href='/account/login';</script>")
       }
     })
  })
}
