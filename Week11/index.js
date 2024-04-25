// const {add}=require('./math')


// console.log("Hello World!!!, Im Responding on NodeJS Platform....");

// console.log("addition of two numbers:", add(2,5));
// a=5;
// b=10;
// c=a+b;
// console.log("Sum of a & b:", c);

// let mul=(a,b)=>{
//     return a*b;

// }
// console.log("Mul of a & b:",mul(2,3));

// //mul(2,3);
// const hello=()=>{
//     console.log("Hello World");
// }
// hello();

const http=require('http')
const hostname='127.0.0.1'
const PORT=5000;

const server=http.createServer((req,res)=>{
   res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h3 style="text-align:center">hello world</h3>');
})

server.listen(PORT, hostname,()=>{
    console.log(`server running at http://${hostname}:${PORT}`);
})


