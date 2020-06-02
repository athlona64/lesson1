//โจทย์วันแรก
//
//
//
// ให้สร้างฟังก์ชั่น generate QRCode
// POST /generateCode  โดยส่ง parameter มา 3 ตัว 1. requestDt, 2. partnerTxnUid, 3. จำนวนเงิน
// random ตัวอักษรมั่ว ๆออกมา 100 ตัว แล้วส่งกลับไปยัง ผู้เรียก โดยคืนสเตตัส 200 และคืน ค่าที่ random มากลับไป

// POST /cancelCode โดยส่ง parameter มา 3 ตัว 1. requestDt, 2.partnerTxnUid, 3. QRcode
// ส่ง 200 กลับไป พร้อมกับ ข้อความว่า ยกเลิกแล้ว

//ให้ font end เรียกสองฟังก์ชั่นนี้ แล้วรับค่าไป

function getBook(){
	let bookName = ['book1', 'book2','book3'];

	return bookName;
}

// let book = getBook();

// for(let i=0;i<book.length;i++){
// 	console.log(book[i]);
// }

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;	
	var id = req.query.id
	var name = req.query.name

	let data = [];
	let body = {
		a:1,
		b:2,
		d: {
			aa:3,
			bb:3,
			cc:[
			{
				bb:333
			},
			{
				cc:333
			}
			]
		}
	};

	data.push(body);
	data.push(body);
	data.push(body);
	data.push(body);
	data.push(body);
	data.push(body);

	if(id == '200'){
	   	res.json({statusCode:200, result: data});
	}else{
		res.json({statusCode:404, result: 'ไม่ใช่ที่ต้องการ'});
	}
});

app.post('/getBook', function(req, res){
	let bookNo = req.body.bookNo;
	console.log(bookNo);

	let book = getBook();
	res.json({statusCode:200, result: book[bookNo-1]});
});
 
app.listen(3000)