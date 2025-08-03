// let a=[];
// b=1;
// for (let i=0;i<100;i++){
//     a[i]=b;
//     b=b+1;
// }
// console.log(a);

// let ar=[];
// let arr=[];
// for (let i=0;i<=100;i++){
//     ar[i]=(i+1)*3;
// }
// // console.log(ar);
// for (let i=0;i<=100;i++){
// if (ar[i]%5==0){
//     arr.push(ar[i]);
// }
// }
// console.log(arr);

let a=[3,4,-5,6,7];
console.log(a.reduce((a,x)=>{
    if (x>0){
        return a+x
    }else{
        return a
    }
}))


// sum=0;
// let avg
// const users=[
//     {
//         name:'Alice',age:25
//     },
//     {
//         name:'Bob',age:30
//     },
//     {
//         name:'Charlie',age:25
//     }
// ];
// for (let i=0;i<users.length;i++){
//     sum+=users[i].age;
// }
// avg=sum/users.length;
// console.log(avg);