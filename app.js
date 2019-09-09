var http = require('http');

var opt = {
    host: 'http://www.people.com.cn',
    method:'get',
    path:'/rss/politics.xml'
}
var body = '';
var req = http.request(opt,function (res) {
    console.log('response:'+res.statusCode)
    res.on('data',function (data) {
        body += data;
    }).on('end',function () {
        console.log(body)
    })
}).on('error',function (err) {
    console.log('error:',err.message)
})
req.write(data);
req.end();