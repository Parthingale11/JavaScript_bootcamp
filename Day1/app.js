// const cowsay =require("cowsay");
// console.log(cowsay.say({text:"I am a moooodule", e : "oo",
//     T : "U "}));
  
// const a=5;
// console.log("the value of a is "+a);
// console.log(`the value of a is also ${a}`);
 
// function greet(name,age){
// let message =`Hello, ${name} ,you are ${age} years old!`;
// return message;
// }
// const greeting =greet("Alice",18);
// console.log(greeting);

//while loop

// let counter=0
// while (counter<3){
//     console.log(`loop iterration: ${counter}`);
//     counter =counter+1;
// }
// console.log("while loop finished");

// //for loop

// const fruits=["Apple","Banana","cherry"];
// for (let i=0;i<fruits.length; i++){
//     const fruit =fruits[i];
//     console.log(`Frui at index ${i} is: ${fruit}`)
// }

// conditionals
//  let temperature=25;
//  if (temperature>30){
//     console.log("its a hot day!");
//  }else if (temperature>20){
//     console.log("Its a pleasant day.");
//  }else{
//     console.log("its a bit chilly day");
//  }

//function with 2 parameters 
// function calculateArea(length,width=1){
//     return length*width;
// }

// const rectangleArea =calculateArea(10,5);
// console.log(`Area of a 10x5 rectangle is:${rectangleArea}`);

// const squareArea =calculateArea(8);
// console.log(`Area of square with side 8 (using default width) is: ${squareArea}`);

// const getSum =function(a,b) {return a+b};
// const sum =getSum(15,20);
// console.log(`the sum of 15 and 20 is ${sum}`);

// const multiply =(x,y)=>x*y;
// console.log(`The product of 5 and 6 is : ${multiply(5,6)}`);

// function mult(x,y){
//     const c=x*y;
//     return c;
//     }


// let sum=0;
// for (let i=1;i<1000;i++){
//     if (i%3==0 || i%5==0){
//         sum=sum+i;
//     }
// }
// console.log(`sum of numbers below 1000 that are divisible by 3 or 5 is ${sum}`)

// let first=1;
// let second=1;
// let sum=0;
// let third=0;
// while (third < 4000000){
//     third=first+second;
//     first=second;
//     second=third;
// if (third%2==0){
//     sum=sum+third;
// }
// }
// console.log(`sum of even fibonacci numbers under 4000000 is ${sum}`);



// function division(d){
//     let a=0
//     while (a<600851475143){
//        let b=d%a;
//         a=a+1;
//         if (b!=0 && a==600851475143){
//             return d
//         }
//     }
// }
// for (let i=1;i<600851475143;i++){
//    if(i%600851475143==0){
      
//        const ans=division(i);
//        console.log(`answer ${ans}`);
//   }
//  }

//  let number=600851475143;
//  let factor=2;
//  let largest=0;
//  while (number>1){
//     if (number%factor==0){
//         number=number/factor;
//         largest=factor;
//     }else{
//         factor=factor+1;
//     }
//  }
//   console.log(`largest prime factor is ${largest}`);

// let number=100n;
// let sum=0n;
// let factorial=1n;
// let lastdigit=0n;
// for (let i=1n;i<=number;i++){
//     factorial=factorial*i;
// }

// while (factorial>0){
//  lastdigit=factorial%10n;
//  sum=sum+lastdigit;
//  factorial=factorial/10n;
// }
// console.log(`sum of digits of factorial ${sum}`);

//convert an string into number
// a="256";
// b=parseInt(a);
// console.log(b+1);

//array to string
a=["2","5","6"];
b=a.join("")
console.log(`${b}`);