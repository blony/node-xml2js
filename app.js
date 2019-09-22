const http = require('http');
const xml2js = require('xml2js');
const xmlParser = new xml2js.Parser({explicitArray:false,ignoreAttrs:true})
const fs = require('fs');
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'qwer1234%^&*',
    port: '3306',
    database: 'politic',
    multipleStatements: true
})
const addSql = 'INSERT INTO laslj(id,title,source,author,link,pubDate,description) VALUES(0,?,?,?,?,?,?)'

http.get('http://www.people.com.cn/rss/politics.xml',function (data) {
    let str = '';
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
            //  data = JSON.stringify(data,null,'\t')
            // fs.writeFile('data.json',data,function(err){
            //      if (err) {res.status(500).send('Server is error...')}
            //      })
            
        })
    })
})