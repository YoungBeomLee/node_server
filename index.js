//import React , {} from "react";

const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;


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

app.post("/products", (req, res) => {
    const body=req.body;
    res.send(body);
});

app.post("/login", (req, res) => {
    res.send('로그인해주세요.')
});

//세팅한 app을 실행시킨다.
app.listen(port, () => {
    console.log('망고샵의 쇼핑몰 서버가 돌아가고 있습니다.');
});