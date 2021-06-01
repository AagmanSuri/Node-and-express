// from express
import express from 'express'

const app= express();

app.get('/',(req,res)=>{
    const user=[
        {
            name:'aagman',
            age:20
        },
        {
            name:'suri',
            age:20
        },
        {
            name:'fake',
            age:20
        },
    ]
    res.send(user);
})
app.get('/profile',(req,res)=>{
    const user=[
        {
            name:'aagman',
            age:20,
            profile:"job"
            
        },
        {
            name:'suri',
            age:20,
            profile:"job"
        },
        {
            name:'fake',
            age:20,
            profile:"job"
        },
    ]
    res.send(user)
})

app.get('/profile',(req,res)=>{
    user="aagman post"
    res.send(user)
})

app.listen(3000);