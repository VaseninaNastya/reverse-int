module.exports = function reverse (n) {
    if(n<0){
        n = n*-1
    }
    var str = String(n);
    var str1 = Array.from(str).reverse().join('')
    return str1
}
