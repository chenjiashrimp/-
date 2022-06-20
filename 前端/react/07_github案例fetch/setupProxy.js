// 不用es6规范 而是cjs规范 因为是加入webpack执行 而不是作为前端代码执行
const {createProxyMiddleware}=require('http-proxy-middleware')
//该文件本来就在react脚手架里面 json的写法只是简化版本而已

module.exports=function(app){
    app.use(// 遇见'/api1'前缀的请求就会触发该代理配置（会转给5000）
    createProxyMiddleware('/api1',{
            target:'http://localhost:5000',
            //设置一个localhost:5000的服务器 3000向5000请求 5000再向github请求
            //防止多次请求导致github 认定为非法请求从而不送回数据
            //5000 上有两个接口 真实和虚拟 不非法就直接用真实接口返回真实数据 非法就虚拟接口返回一些固定的假数据
            //不会跨域 因为github用cors解决了跨域
            changeOrigin:true,//控制服务器收到的请求头中Host的值
            //true的时候显示请求来自于localhost:5000 欺骗服务器 如果服务器有一些限制时这样写就有用
            pathRewrite:{'^/api1':''}//重写请求路径
        }),
    )
}