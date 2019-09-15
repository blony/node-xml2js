var http = require('http');


http.get('http://www.people.com.cn/rss/politics.xml',function (data) {
    var str = '';
    data.on("data",function (chunk) {
        str+=chunk;
    })
    data.on('end',function () {
        console.log(str.toString())
    })
})