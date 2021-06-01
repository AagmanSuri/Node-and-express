// from node 
import http from 'http';
import { createServer } from 'node:http';

const server = createServer((request,response)=>{
    console.log('header',request.headers)
    console.log('method',request.method)
    console.log('url',request.url)
    // response.setHeader('Content-Type','text/html ');
    // response.end("<h1>Hello</h1>");
    const user={
        name:"aagman",
        rollno:66
    }

     response.setHeader('Content-Type','application/json ');
     response.end(JSON.stringify(user));


})

server.listen(3000)