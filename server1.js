// from express
import express from 'express'

const app= express();

//middleware
// app.use((req,res,next)=>{
//     next();
// })
app.use(express.urlencoded({extended:false}));

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

app.post('/profile',(req,res)=>{
    //to get users data
    console.log(req.body);
    res.send("success");
})

app.listen(3000);