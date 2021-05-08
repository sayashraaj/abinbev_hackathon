const express = require('express')
const app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());  //has to be before server is initialised
const PORT = process.env.PORT || 5000

string_to_array = function (str) {
     return str.trim().split(" ");
};

vendorsArray=['john', 'simba']

app.post('/', async (req,res)=>{
	console.log(req.body)

	const orderNumber=req.body.textquery;
	const vendorName=req.body.textquery;
	let orderAnswer=undefined;
	let vendorAnswer=undefined;

	if(orderNumber){
	console.log(orderNumber)
	var r = /\d+/g;
	var s = orderNumber
	orderAnswer=(s.match(r))}

	if(vendorName){
		wordsArray = string_to_array(vendorName);
		await wordsArray.forEach(word=>{
			if(vendorsArray.includes(word.toLowerCase())){
				vendorAnswer=word;
			}
		})
	}

	return res.send(`your order number is ${orderAnswer}, vendor name is ${vendorAnswer}`)
})

app.listen(PORT , (req,res)=>{
	console.log(`Server has started.`);
})