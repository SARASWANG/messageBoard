// 渲染首页处理程序
var express = require('express');

// 导出程序
exports.showIndex = (req,res) => {
	res.render('index.html')
}