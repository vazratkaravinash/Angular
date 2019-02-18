/**
 * Function will check number is prime or not
 * @param {number} no 
 */
function isPrime(no:number):boolean {
    for(var i=2; no>=square(i);i++){
        if(no%i==0){
            return false;
        }
    }
    return true;
}

/**
 * Function will return square of number
 * @param {number} no 
 */
function square(no:number):number {
    return no*no;
}

if(isPrime(11)){
    console.log("Number is prime");
}
else {
    console.log("Number is not prime")
}