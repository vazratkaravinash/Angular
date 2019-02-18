/**
 * Function will return fibonacci series
 * @param {number} no 
 */
function fibonacci(no:number):number[]{
    var fibonacciSeries:number[]=[];
    var f1:number = 1;
    var f2:number = 1;
    var f3:number;
    f3=f1+f2;
    if(no==f2){
        fibonacciSeries.push(f1);
        return fibonacciSeries;
    }
    else{
        fibonacciSeries.push(f1);
        fibonacciSeries.push(f2);
        for(var i = 0; no>=f3; f3 = f1+f2){
            fibonacciSeries.push(f3);
            f1=f2;
            f2=f3;
        }
        return fibonacciSeries;
    }
}

var fibSeries = fibonacci(21);
for(var i=0;i<fibSeries.length;i++){
    console.log(fibSeries[i]);
}