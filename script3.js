// for node file system module
import fs from 'fs';

fs.readFile('./heloo.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
// //Append 
// fs.appendFile('./heloo.txt',' This is a new line',err=>{
//     if(err){
//         console.log(err);
//     }
// })