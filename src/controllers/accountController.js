//账户路由的控制器

//1.获取登录页面
const fs= require('fs')
const path=require('path')

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
