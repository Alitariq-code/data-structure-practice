const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);


class LinkList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;const http = require('http');

        const requestListener = function (req, res) {
          res.writeHead(200);
          res.end('Hello, World!');
        }
        
        const server = http.createServer(requestListener);
        server.listen(8080);
        const http = require('http');

        const requestListener = function (req, res) {
          res.writeHead(200);
          res.end('Hello, World!');
        }
        
        const server = http.createServer(requestListener);
        server.listen(8080);
        const http = require('http');

        const requestListener = function (req, res) {
          res.writeHead(200);
          res.end('Hello, World!');
        }
        
        const server = http.createServer(requestListener);
        server.listen(8080);
                        

    }
    append(value){
        const newNode={
            value:value,
            const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);

            next:null
        };
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;

    }
    prepend(value){
        const firstNode={
            value:value,
            next:null,
        }
        firstNode.next=this.head;
        this.head=firstNode;
        this.length++;
        return this
    }
}


const myLInklist=new LinkList(10);

myLInklist.append(5)
myLInklist.append(5)
myLInklist.prepend(2 )
console.log(myLInklist)
