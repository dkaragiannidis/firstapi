const http=require("http");
const app=require("./app");
//import http
//καθοριζουμε την πορτα στην οποια θα τρεχει ο node.js 
//server μας αν δεν υπαρχει ιδει χρησημποιουμε την 3000 ως  default
const port=process.env.port || 3000;
const server=http.createServer(app);
//listen to start the server kai ως argument περναμε το  port
server.listen(port);