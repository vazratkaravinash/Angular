/**
 * 
 * @param number 
 */
function isArmstrong(number:number):boolean{
    var dummy = number;
    var sum:number=0;
    while(dummy>0){
        sum+=cube((dummy%10));
        dummy=Math.floor(dummy/10);
    }
    if(sum==number){
        return true;
    }
    else{
        return false;
    }
}
/**
 * 
 * @param no 
 */

function cube(no:number):number{
    return no*no*no;
}

if(isArmstrong(153)){
    console.log("Number is a Armstrong number");
}
else{
    console.log("Number is not a Armstrong number");
}