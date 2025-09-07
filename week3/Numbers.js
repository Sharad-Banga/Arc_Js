// let a = 100000;

// let b = 1e5; //1 x 10^5
// let c = 1e-5 ;  // 1x 10^-5
// console.log(a==b);;


// HEX , BINARY , OCTAL NUMBERS

// PREFIXES

// hexa - 0x - 16
// binary - 0b - 2
// octal - 0o - 8

// console.log(0xff);
// console.log(0b111111);
// console.log(0o377);

// CONVERT NUMBER FROM DECIMAL TO OTHER 

// let num = 255;

// let hex = num.toString(16);
// let oct = num.toString(8);
// let bin = num.toString(2);

// console.table({hex,oct,bin});



// ROUNDING

// let a = 2.4;

// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.trunc(a));


// console.log(Math.random()); //  0 -> 1

// console.log(Math.random()*10); // 0->9

// console.log(Math.floor(Math.random()*10));//0->9

// console.log(Math.floor(Math.random()*10)+1); // 1 -> 10

// console.log(Math.floor(Math.random()*(20-11+1))+11); //11 -> 20

// let min = 4
// let max = 21;

// console.log(Math.floor(Math.random()*(max-min+1))+ min); 
// console.log(Math.floor(Math.random()*(range))+ min); 


// console.log(Math.random());
// 0 -> 10
// 0.0 -> 0.9
// 0.012
// 0.12
// console.log(Math.random()*10);
//0.i3939 -> 9.2278



// console.log(Math.floor(Math.random()*10) + 0);
//0 -> 9

// console.log(Math.floor(Math.random()*10) + 1);
//1 -> 10


// console.log(Math.floor(Math.random()*10) + min);

let min = 6;
// let range =10;
let max = 25;
// console.log(Math.floor(Math.random()*range) + min);
// console.log(Math.floor(Math.random()*max-min+1) + min);

// ***************** FIXED ******************88

// let a = 12.451678;
// console.log(a.toFixed(3)); // 12.452


// IMP

// let a = 0.3;
// let b = 0.1 + 0.2;

// console.log(a==b);
// console.log(b.toFixed(1));

// let a = 0.1+0.2;
// console.log(a);

// console.log(typeof a);


// let b = a.toFixed(2);
// console.log(b);
// console.log(typeof b);

// let c = +b;
// console.log(typeof c);


// IS NAN

// let a = NaN;

// console.log(isNaN(a));

// console.log(NaN==NaN);

// // NaN is special value , 


// finite Numbers -> all numbers - (Infinity , -Infinity , Nan)


// let a = -Infinity;

// console.log(isFinite(a));


let a = 2;
let b = 4;

let c = Math.pow(a,b);
console.log(c);


