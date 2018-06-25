// 创建路由
var express = require('express')

var router = express.Router()   // 返回一个对象

// 引入自定义模块index.js
var index = require('./controllers/index.js')

// 引入自定义模块user.js
var user = require('./controllers/user.js')

// 引入自定义模块topic.js
var topic = require('./controllers/topic.js')


// 1 渲染首页路由
router.get('/',index.showIndex)

// 2 登录/注册路由
router
	.get('/signin', user.showSignin)   //渲染登录页面
	.post('/signin', user.signin)      // 处理登录请求	
	.get('/signup', user.showSignup)   //渲染注册页面	
	.post('/signup', user.signup)      //处理注册请求
	.post('/signout', user.signout)    //处理退出请求


// 3 话题路由
router
	.get('/topic/create', topic.showCreate)  //渲染发布话题页面
	.post('/topic/create', topic.create)    // 处理发布话题页面

	.get('/topic/:topicID', topic.show)    //渲染话题详情页面	
	.get('/topic/:topicID/edit', topic.showEdit)   //渲染编辑话题页面	

	.post('/topic/:topicID/edit', topic.edit)  //处理编辑话题请求
	.post('/topic/:topicID/delete', topic.delete)  //处理删除话题请求


// 导出路由
module.exports = router;  