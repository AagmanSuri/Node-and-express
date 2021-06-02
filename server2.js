// from express
//RESTful api

import express from 'express'
const app= express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{  
    //console.log(req.query); to bring the url localhost:3000/?name=aagman
    console.log(req.headers);
    res.send("getting root");
})

app.listen(3000);