// Please do not change the prewritten code

import http from "http";
import fs from "fs";

//Welcome to Coding Ninjas! Today's quote of the day is  
const server = http.createServer((req, res) => {
  //  Write your code here

  if(req.method == "POST"){
    let body = "";
    //data coming in chunks
    req.on("data", (chunk)=>{
      body+=chunk;
    })
    req.on("end", ()=>{

      //update file
      try{
        fs.appendFileSync("data.txt", body);
        const fileContent = fs.readFileSync("data.txt", {encoding: 'utf-8'});
        console.log(fileContent);
        res.end("Successfully updated the file!")
      } catch(err){
        console.log(err);
      }
      
      
    })
  } else{
    res.end("Not a post request");
  }
  
});

export default server;
