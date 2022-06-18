// 不用es6规范 而是cjs规范 因为是加入webpack执行 而不是作为前端代码执行
const {createProxyMiddleware}=require('http-proxy-middleware')
//该文件本来就在react脚手架里面 json的写法只是简化版本而已

module.exports=function(app){
    app.use(// 遇见'/api1'前缀的请求就会触发该代理配置（会转给5000）
    createProxyMiddleware('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,//控制服务器收到的请求头中Host的值
            //true的时候显示请求来自于localhost:5000 欺骗服务器 如果服务器有一些限制时这样写就有用
            pathRewrite:{'^/api1':''}//重写请求路径
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}