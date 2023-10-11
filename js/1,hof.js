

//forEach
const arr = [1,2,3,4,5];
arr.forEach(function(item) {
    console.log(item)
});

//map
const arr2 = [1,2,3,4,5];
const doble = arr2.map((item) => {
    return item * 4;
});
console.log(doble);

//filter
const arr3 = [1,2,3,4,5];
const evenNumber = arr3.filter(function(item) {
    return item % 2 === 0;
});
console.log(evenNumber);

//Reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
    return total + item;
}, 0);
console.log(sum)

/*_____________________________*/
function hello() {
    console.log("Hello World");
}

function goodbye() {
    console.assert.log("GoodBye Cruel Wwwwworld");
}
function print(callback) {
    callback();
}
print(hello);
print(goodbye);

//''''''
function multiflyBy(n) {
    return function (x) {
        return x * n;
    }
}

constdouble = multiflyBy(2);
console.log(double(5))
console.log(multiflyBy(10)(32));

////custom Hof that implements callback
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(1);
    }
}
function logHumber(n) {
    console.log(`The Number is ${n}`);
}
repeat(10, logNumber);

