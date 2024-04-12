function drawCats(howManyTimes){
  for(var i=0;i<howManyTimes;i++){
    console.log(i + "=^.^=");
  };
};
drawCats(10);






or:





var drawCats = function(howManyTimes){
   for(var i = 0 ; i < howManyTimes ; i++){
   console.log(i + "=^.^=");
     };
   };
drawCats(10);



or:




var drawCats = (howManyTimes)=>{
   for(var i = 0 ; i < howManyTimes ; i++){
   console.log(i + "=^.^=");
     };
   };
drawCats(10);
