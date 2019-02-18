/**
 * Find sum of all elements from Array
 * @param a_number 
 */
function add(a_number:number[]):number{
    let sum:number = 0;
    for(let i=0; i<a_number.length; i++){
        sum+=a_number[i];
    }
    return sum;
}

var a_num:number[] = [23, 6, 7, 4, 5, 7];

console.log("Sum of all array element is ", add(a_num));