// 入口程序
var express = require('express');
var app = express();
// 导入路由模块
var router = require('./router.js');

// 配置express-art-template
app.engine('html', require('express-art-template')); 

// 公开静态资源------??
app.use('/public', express.static('./public/'))
// 公开第三方资源包
app.use('/node_modules', express.static('./node_modules/'))



// 挂载路由
app.use(router)
 
// 监听端口
app.listen(3000, (data) => {
	console.log('success')
})