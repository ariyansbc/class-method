var numbers = [27 , 22 , 11 , 31 , 29];
var numOneDif = [];
var numTwoDif = [];
var numThreeDif = [];
var numFourDif = [];
var numFiveDif = [];

let i , j, value;
for( i = 0 ; i < numbers.length ; i++) {
    
        for(j = 0 ; j < numbers.length ; j++) {
            value  = numbers[i] - numbers[j];
            if(i==0) {
              numOneDif.push(value);   
            }
            else if(i==1) {
                numTwoDif.push(value);
            }
            else if(i == 2) {
                numThreeDif.push(value);
            }
            else if(i==3 ){
                numFourDif.push(value);

            }
            else {
                numFiveDif.push(value);
            }
              
        }
}
console.log(numOneDif);
console.log(numTwoDif);
console.log(numThreeDif);
console.log(numFourDif);
console.log(numFiveDif);