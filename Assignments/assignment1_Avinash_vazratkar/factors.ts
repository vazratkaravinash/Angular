/**
 * Function will return factors of number
 * @param number 
 */
function getFactors(number:number):number[]{
    var factors:number[]=[];
    for(var i=1; i<number/2+1; i++){
        if(number%i==0){
            factors.push(i);
        }
    }
    return factors;
}

var factor = getFactors(20);

for(var i=0;i<factor.length;i++){
    console.log(factor[i]+ " ");
}