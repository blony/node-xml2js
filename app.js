var http = require('http');
var xml2js = require('xml2js');
var xmlParser = new xml2js.Parser({explicitArray:false,ignoreAttrs:true})
var fs = require('fs');

http.get('http://www.people.com.cn/rss/politics.xml',function (data) {
    var str = '';
    data.on("data",function (chunk) {
        str+=chunk;
    })
    data.on('end',function () {
        xmlParser.parseString(str,function (err,resuslt) {
            if (err) {
                console.log(err)
                return 
            }
            let data = JSON.stringify(resuslt,null,'\t')
             data = JSON.parse(data).rss.channel.item
             data = JSON.stringify(data,null,'\t')
            fs.writeFile('data.json',data,function(err){
                 if (err) {res.status(500).send('Server is error...')}
                 })
        })
    })
})