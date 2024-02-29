variable=10;

(()=>{
    foo=100;
    console.log(variable);
    variable=20;
    var foo=120;
    console.log(variable);

})()

console.log(foo);
console.log(variable);
var variable=30;