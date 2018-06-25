
// 渲染登录页面
exports.showSignin = (req,res) => {
	res.render('signin.html')
}

// 处理登录请求
exports.signin = (req,res) => {
	res.end('123')
}
// 渲染注册页面
exports.showSignup = (req,res) => {
	res.end('123')
}
// 处理注册请求
exports.signup = (req,res) => {
	res.end('123')
}
// 处理退出请求
exports.signout = (req,res) => {
	res.end('123')
}