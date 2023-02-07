//? Problem 1. Here gives an function that takes an positive number and doing some arithmetical operation. first mul with that num then add plus 10 ,then divided by 2. and at last sub by 5


// function mindGame(num){
//   let mulResult=((num*3)+10)/2-5;
//   return mulResult;
// }
//  const result= mindGame(5);
// //  console.log(result)

//!  Problem 2
// function evenOdd(str){
 
//   for(let i=0; i<str.length; i++){
   
//     if(str.length%2==0){
//       return 'even'
//     }
//     else{
//       return 'odd';
//     }
//   }

 
// }
// const result=evenOdd('zahid hasan');

//*  problem 3

// function isLGSeven(num){
//  const subNum= num-7;
//  if(subNum<7){
//   return subNum;
//  }
//  else if(subNum>=7){
//    const mulNum=num*2;
//    return mulNum;
//  }
// }
//  const result=isLGSeven(15)
//  console.log(result);

//!  problem 4
// function  findingBadData(numArray){
//   let count=0;
//   for(let i=0; i<numArray.length; i++){
//    const element=numArray[i];
//    if(element<0){
//     count++
//    }
//   }
//   return count;

// }
// const numArray= [ -4, -9, -5, -33, -55 ]
// const result=findingBadData(numArray);
// console.log(result);

//? problem 5

function gemsToDiamond(firstGem,secondGem,thirdGem){
 const first=firstGem*21;
 const second=secondGem*32;
 const third=thirdGem*43;
 const totalDiamond=first+second+third;
const doubleTotal=(2*totalDiamond);

  if(totalDiamond<1000){
    return totalDiamond;
  }
 else(totalDiamond > doubleTotal)
    const newRe= totalDiamond-2000;
   return newRe;
 
}

const result=gemsToDiamond(20, 200, 50)
console.log(result);