/**
 * Function will return maximum from three numbers
 * @param {number} no1 
 * @param {number} no2 
 * @param {number} no3 
 */
function maximum(no1:number, no2:number, no3: number): number {
    return (no1>no2) ? ((no1>no3) ? no1:((no2>no3) ? no2 : no3)):(no2>no3?no2:no3);
}

var max = maximum(23, 89, 6);
console.log("Maximum number is ",max);