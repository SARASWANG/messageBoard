// 创建路由
var express = require('express')

var router = express.Router();   // 返回一个对象

// 引入自定义模块index.js
var index = require('./controllers/index.js')


// 1 渲染首页
router.get('/',index.showIndex)



// 导出路由
module.exports = router;  