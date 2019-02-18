 /**
  * Find maximum from given atrray
  * @param a_number 
  */
function maximunFromArray(a_number:number[]):number{
    let max = a_number[0];
    for(let i=1; i<a_number.length;i++){
        if(max<a_number[i]){
            max = a_number[i];
        }
    }
    return max;
}

var a_num:number[] = [23, 89, 6, 29, 56, 45, 77, 32];

console.log("Maximun number from array is ", maximunFromArray(a_num));
