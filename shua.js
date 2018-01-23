var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

var postData = querystring.stringify({
	'leftTicketDTO.train_date':'2018-01-31',
	'leftTicketDTO.from_station':'GZQ',
	'leftTicketDTO.to_station':'HZH',
	'purpose_codes':'ADULT'
})
var options = {
	hostname:'kyfw.12306.cn',
	port:80,
	path:'/otn/leftTicket/queryZ',
	method:'GET',
	headers:{
		'Accept':'*/*',
		'Accept-Encoding':'gzip, deflate, br',
		'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Cookie':'tk=vKQrftCaegblkwXfIMwKjfqGzlLQ_6_npYK0131grNFtnTF3rw7170; JSESSIONID=4EB5820026EA943B6DB29F26E245F181; route=495c805987d0f5c8c84b14f60212447d; BIGipServerotn=4124508426.64545.0000; RAIL_EXPIRATION=1515805176360; RAIL_DEVICEID=D7qTCDznq1cJWRZSOwYJKS_dGkHYBpZJ7pnNwjoLmtgj2tPmTD2dk9AIN8UGIGZ6htM59dgOYHvVlD_nRrHflCXQbQIvrPhxLKojMPEJGnKQ4kiVY2CnZFLBjh5LhiAhbfPsYf05wWUSdaqPGOuerTSjtIfIiycn; BIGipServerpassport=921174282.50215.0000; current_captcha_type=Z; _jc_save_fromStation=%u5E7F%u5DDE%2CGZQ; _jc_save_toStation=%u676D%u5DDE%2CHZH; _jc_save_fromDate=2018-01-31; _jc_save_toDate=2018-01-09; _jc_save_wfdc_flag=dc; acw_tc=AQAAAPgOK1UDQw4AOuAGt73cP0ZVUMq9',
		'Host':'kyfw.12306.cn',
		'If-Modified-Since':0,
		'Pragma':'no-cache',
		'Referer':'https://kyfw.12306.cn/otn/leftTicket/init',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

function req12306(fn) {
	var req = http.request(options,function (res) {
		console.log('status: '+res.statusCode)
		// console.log('status: '+JSON.stringify(res))
		console.log('headers: '+JSON.stringify(res.headers))
		res.on('data',function (chunk) {
			console.log(Buffer.isBuffer(chunk))
		})
		res.on('end',function () {
			console.log('请求完毕')
			fn(res)

		})
		
	})

	req.on('error',function (e) {
		console.log(e)
	})
	req.write(postData)
	req.end()
}

function writeIT(ppp) {
	var data = '';
	var arr1 = [];
	var arr2 = [];
	// console.log(ppp)
	for(var obj in ppp){
		arr1.push(obj)
		// console.log(obj+'------------')
		arr2.push(ppp[obj])
	}
	data = 'app'

	var reader = fs.createReadStream('12306.html');
	reader.setEncoding('UTF8');

	reader.on('data',(chunk)=>{
	  data += chunk
	})
	reader.on('end',()=>{
	  console.log(data)
	  writeapp()
	})
	reader.on('error',(err)=>{
	  console.log(err)
	})

	function writeapp() {
	  var write = fs.createWriteStream('12306.html');
	  write.write(data,'UTF8')
	  write.end();
	  write.on('finish',()=>{
	    console.log('写入完成')
	  })
	  write.on('error',(err)=>{
	    console.log(err)
	  })
	}


	console.log('程序执行完毕')

}
// writeIT()


req12306((data)=>{
	console.log(data.headers)
	writeIT(data)
})

