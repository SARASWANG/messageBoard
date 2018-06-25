// 创建路由
var express = require('express')

var router = express.Router();   // 返回一个对象


// 1 渲染首页
router.get('/',(req,res) => {
	res.send('is ok')
})


// 导出路由
module.exports = router;  