// console.log("hello");

// var a=0, b=15;
// while (a<=15){
//     if(a**2 + b**2 == 113){
//         console.log(a,b);
//         break
//     }
//     else{

//         a+=1;
//         b-=1
//     }
// }


// leap year and non leap year
  
// var nw  = require('readline-sync')
// user = nw.question('give input')

// if(user%4==0){
//     if(user%100==0){
//         if(user%400==0){
//             console.log("leap year")
//         }else{
//             console.log("non-leap year")
//             }
//         }else{
//             console.log("leap year")
//     }
// }else{
//     console.log("non-leap year")
// }


//checking number is a palindrome number is not

// const name = (strr)=>{
//     for(let j of strr){
//         const stValue = j.toString()
//         var b=''
//         for(var i=stValue.length-1;i>=0;i--){
//             b=b + stValue[i]
//         } 
//         console.log(b);
//         if(b ===stValue){
//             console.log("palindrome");
//         }else{
//             console.log("not palindrome");
//         }   
//     }
// }

// name([111,765,2343,444,23345,7854634])


//cheking string a palindrome or not

// const palindrome = (stringname)=>{
//     let palin = ''
//     for (let i=stringname.length-1;i>=0;i--){
//         palin = palin + stringname[i]
//         console.log(palin);
//     }
//     if(palin == stringname){
//         console.log(`${palin} is palindrome`);
//     }else{
//         console.log("not");
//     }
// }
// palindrome("madam")

// checking even and odd number
// var userinput = require("readline-sync")
// newUser = userinput.question("give input")

// if(Number(newUser) % 2===0){
//     console.log(newUser+""+"even number");
// }else{
//     console.log(newUser+""+"odd number")
// }


//check number is factorial or not

var fac= require("readline-sync")
newnumber = fac.question("check number")
for(var i=1;i<=newnumber;i++){
    factor = 1
    for(var j=1;j<=i;j++){
        factor*=j
        console.log(factor);
    }if(factor == newnumber){
        console.log("factorial");
        break
    }else if(factor>newnumber){
        console.log("non-factorial");
        break
    }
}


// var number = require("readline-sync")
// newcheck = number.question("give number")

// var ans = 1;

// if(newcheck==0||newcheck==1){
//     console.log(ans);
// }else{
//     for(var i=newcheck;i>=1;i--){
//         ans=ans*i
//     }
//     console.log(ans);
// }

// var strr=require("readline-sync")
// newStrr = strr.question("give string")
// var palin =''
// for (var i=newStrr.length-1;i>=0;i--){
//     console.log(palin,i,newStrr,newStrr[i]);
//     palin+=newStrr[i]
// }if(palin===newStrr){
//     console.log("palindrome");
// }else{
//     console.log("no");
// }

// const minutes = (n)=>{
//     m=n*60
//     s=n*3600
//     ms=
//     console.log(m,s);
// }
// minutes(2)



// const largestThreeNumbers = (...args)=>{
// // console.log(args);
    
    
//     let largest
//     if(num1>=num2 && num1>=num3){
//         largest = num1
//     }else if(num2>=num1 && num2 >=num3){
//         largest = num2
//     }else{
//         largest = num3
//     }
//     console.log(num1,num2,largest);
// }

// largestThreeNumbers(23,43,55)


// const swapTwoNumbers = (num1,num2)=>{
//     let temp 
//     temp = num1
//     num1 = num2
//     num2 = temp
//     return [num1,num2]
// }
// console.log(swapTwoNumbers(23,45))


// let readLine = require('readline-sync')
// 
// let number = readLine.question("check numbeer.... is prime of not")
// let oneList =[2,3,5,4,6,7,8,1,21,32,123,883]

// for (var i=0;i<oneList.length;i++){
//     let isprime = true
//     if(oneList[i] == 1){
//         console.log(i + "is niether prime nor compiste i");
//     }
//     else if(oneList[i] >1){
//         for (let j = 2;j<oneList[i];j++){
//             if(oneList[i]%j == 0){
//                 isprime=false
//             }
//         }
//         if(isprime){
//             console.log(oneList[i] + "is prime number");
//         }else{
//             console.log(oneList[i] + "is not prime number");
//         }
//     }   
// }

