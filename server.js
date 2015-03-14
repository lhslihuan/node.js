/**
 * Created by LSH on 2015/3/14.
 */
var http = require("http");
var server = http.createServer(function (request, response) {
    console.log("接收到请求：" + request.url);

    switch (request.url) {
        case '/':
            response.writeHead(200);
            response.write("<html>hello, world!</html>");
            break;

        default :
            response.writeHead(404);
            response.write("请求的页面不存在 T_T");
    }

    response.end();
});
server.listen(80);
