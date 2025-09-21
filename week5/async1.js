
// import fs from "fs";
// let content = fs.readFileSync('a.txt',"utf-8");
// console.log(content);



// function washingMachine(){
//   console.log("start button clicked");
//   console.log("Washing machine Running.....");
//   for(let i = 0 ; i<10000000000 ; i++){
//   }
//   console.log("OUTPUT CLOTHES");
// }

// washingMachine();



import { log } from "console";
import fs from "fs";

function callback(err,content){
  
  if(err){
    console.log(err);
    
  }
  else{
    console.log(content);
    
  }
  
}

fs.readFile('a.txt' , "utf-8" , callback);

