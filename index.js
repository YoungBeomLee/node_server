//import React , {} from "react";

const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;
const models = require('./models');


app.use(express.json()); //json 형식의 데이터를 처리할 수 있게 설정하는 코드
app.use(cors()) //브라우저의 CORS 이슈를 막기 위해 사용하는 코드

app.get('/products', (req, res) => {
    const query=req.query;
    console.log(query);
    res.send({
        "products": [
        {"id":1, "name": "습식사료", "price": 10000, "seller": "내추럴코어", "imageUrl": "images/products/food1.jpg"},
        {"id":2, "name": "하네스", "price": 50000, "seller": "도기멍", "imageUrl": "images/products/acc1.jpg"},
        {"id":3, "name": "배변패드", "price": 30000, "seller": "흡수혁명", "imageUrl": "images/products/house1.jpg"}
        ]
        })
})

app.get('/products/:id/:events/:eventId', (req, res) => {
    const params=req.params;
    const {id,eventId}=params;
    res.send(`id는 ${id}이고 eventId는 ${eventId}입니다`);
})
//상품생성데이터를 데이터베이스에 추가
app.post("/products", (req, res) => {
    const body=req.body;
    //1.상수 body에 전달받은 값을 구조분해할당
    const {name,description,pirce,seller}=body;
    //레코드 생성
    models.Product.create({
        name,
        description,
        price,
        seller
    }).then(function (result){
        console.log('상품생성결과:',result);
        res.send({result});
    }).catch(function(error){
        
    });
    console.log(body);
    
});

app.post("/login", (req, res) => {
    res.send('로그인해주세요.')
});

//세팅한 app을 실행시킨다.
app.listen(port, () => {
    console.log('망고샵의 쇼핑몰 서버가 돌아가고 있습니다.');
    models.sequelize.sync().then(function(){
        console.log("😁db연결 성공");
    }).catch(function(err){
        console.log(err);
        console.log("db연결 x");
        process.exit();
    })
});