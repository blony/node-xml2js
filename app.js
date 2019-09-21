var http = require('http');
var parseString = require('xml2js').parseString;

http.get('http://www.people.com.cn/rss/politics.xml',function (data) {
    var str = '';
    data.on("data",function (chunk) {
        str+=chunk;
    })
    data.on('end',function () {
       // console.log(str.toString())
        parseString(str,function (err,result) {
            console.dir(JSON.stringify(result))
        })
    })
})