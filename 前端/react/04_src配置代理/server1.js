const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));//输出请求方
	console.log('请求的地址',request.url);//请求的是服务器的什么信息 请求的地址
	next()
})

app.get('/students',(request,response)=>{ // ‘/students’表示服务器能够响应的地址 如果不重写地址 请求的地址就会混有api1 就无法响应
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
		// students data
	]
	response.send(students)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
	// 服务器启动成功的输出
})
