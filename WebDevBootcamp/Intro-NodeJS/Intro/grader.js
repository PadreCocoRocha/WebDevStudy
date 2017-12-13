function average(array){
    var sum = 0;
    array.forEach(function(el){
        sum += el;
    })
    return Math.round(sum/array.length);
}

console.log(average([20,50,30,50,63]));