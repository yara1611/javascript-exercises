const sumAll = function(x,y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    if (x > y) {
        const temp = x;
        x = y;
        y = temp;
      }
    let sum =0;
    for (let index = x; index < y+1; index++) {
        sum +=index
        
    }
return sum
};

// Do not edit below this line
module.exports = sumAll;
