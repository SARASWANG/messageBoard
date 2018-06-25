// 入口程序
var express = require('express')
var app = express()
// 导入路由模块
var router = require('./router.js')


// 配置express-art-template
app.engine('html', require('express-art-template')); 

// 挂载路由
app.use(router)
 
// 监听端口
app.listen(3000, (data) => {
	console.log('success')
})