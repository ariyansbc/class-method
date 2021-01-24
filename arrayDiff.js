
var numbers = [27 , 22 , 11 , 31 , 29];
var numOneDif = [];
var numTwoDif = [];
var numThreeDif = [];
var numFourDif = [];
var numFiveDif = [];

let i , j,value;
for( i = 0 ; i < numbers.length ; i++) {
    if(i == 0) {
        for(j = 0 ; j < numbers.length ; j++) {
            value  = numbers[i] - numbers[j];
            numOneDif.push(value);      
        }
    }
    if(i==1) {
        for(j = 0 ; j < numbers.length ; j++) {
            value  = numbers[i] - numbers[j];
            numTwoDif.push(value);
      }
   }
   if(i==2) {

    for(j = 0 ; j < numbers.length ; j++) {
        value  = numbers[i] - numbers[j];
        numThreeDif.push(value);
   }

   }
   if(i==3) {

    for(j = 0 ; j < numbers.length ; j++) {
        value  = numbers[i] - numbers[j];
        numFourDif.push(value);
   }

   }
   if(i==4) {

    for(j = 0 ; j < numbers.length ; j++) {
        value  = numbers[i] - numbers[j];
        numFiveDif.push(value);
      }

   }

}
console.log(numOneDif);
console.log(numTwoDif);
console.log(numThreeDif);
console.log(numFourDif);
console.log(numFiveDif);
