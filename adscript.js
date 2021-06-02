
import fs from 'fs';

fs.readFile('./adventTest.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
       var opencounter =0;
       var closecounter =0;
       var garb=0 
       var datafile = data.toString();
    //    console.log('datafile',datafile.length)
       var splitdata = datafile.split("");
    //    console.log('split',splitdata.length)
      //  console.log(splitdata)
       for(var i=0 ; i<= splitdata.length ; i++){
           if(splitdata[i]==="("){
               opencounter=opencounter+1;
               i++;
           }else if(splitdata[i]===')'){
               closecounter=closecounter+1
           }else{
               garb=gar+1;
               i++;
           }
       }
        console.log("opencounter :",opencounter,"closecounter :" ,closecounter,'garb' ,garb);
    }
})