//学生管理系统的控制器   
     //读取学生管理系统页面  
     //从数据库中读取数据  
     //渲染页面
'use strict'
//导入模块
const xtpl=require('xtpl')  //第三方包
const path =require('path')

//创建数据库客户端
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

exports.getStudentList=(req,res)=>{
   //1.从数据库中读取数据
  MongoClient.connect(url, function(err, db) {
    const collection = db.collection('studentInfo')
    collection.find({}).toArray(function(err, docs) {
      //2.将读取的数据填充到页面中
      xtpl.renderFile(path.join(__dirname,'../views/studentlist.html'),{
        studentlist:docs
      },(err,content)=>{
        res.end(content)
      })
    })
  })
}
