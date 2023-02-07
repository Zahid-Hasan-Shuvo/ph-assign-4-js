//? problem no:1. Here gives an function that takes an positive number and doing some arithmetical operation. Firstly multiply with that given number then add plus 10 ,then divided by 2. And at last Subtract 5 and return that result.


function mindGame(posNum){
  let type= typeof posNum;
  if(type!=="number"){
    return "please give an valid number"
  }
  else if(posNum<0){
    return "give an positive number"
  }

  let totalResult=((posNum*3)+10)/2-5;
  return totalResult;
}

 


//!  Problem No: 2. The output should be given based on the total number of characters in the String. If the character number is even, it will return 'even' and if it is odd, it will return 'odd'.

function evenOdd(str){
  let type= typeof str;
  if(type!=="string"){
    return "please give an valid string"
  }
  for(let i=0; i<str.length; i++){
    if(str.length%2==0){
      return 'even'
    }
    else{
      return 'odd';
    }
  }
}


//*  problem No:3. Take a number as the input value. Find the difference between that input value and 7. If this difference is less than 7, return the subtraction. Otherwise double the input must be returned.

function isLGSeven(num){

  let type= typeof num;
  if(type!=="number"){
    return "please give an valid number"
  }
 const subNum= num-7;
   if(subNum<7){
  return subNum
 }
 else if (subNum>=7){
   const doubleNum=num*2;
   return doubleNum;
 }
}

//!  problem No:4. Take an array as input. array element will be some number. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative it is “Bad Data”. If any number is positive it is “Good Data”. How many bad data are there in the array and must return that number.

function  findingBadData(numArray){

  let type= typeof numArray;
  if(type!=="object"){
    return "please give an valid input array"
  }

  let count=0;
  for(let i=0; i<numArray.length; i++){
   const element=numArray[i];
   if(element<0){
    count++
   }
  }
  return count;
}



// ? problem No: 5. Firstly we have to declared a function named gemsToDiamond, which have 3 parameters. Thats parameter takes all num. 1st, 2nd and 3rd parameter multiply with 21,32,43 respectfully. Then all 3 multiply result will be added a total sum. If the total-sum<1000, then return that number. But if it cross double of the total-sum then subtraction 2000 from total-sum and return that.

function gemsToDiamond(firstFriendGem,secondFriendGem,thirdFriendGem){

  let type= typeof (firstFriendGem,secondFriendGem,thirdFriendGem);
 
 
  if(type!=="number"){
    return "please give all valid number"
  }

 const firstFriendDiamond=firstFriendGem*21;
 const secondFriendDiamond=secondFriendGem*32;
 const thirdFriendDiamond=thirdFriendGem*43;

 const totalDiamond= firstFriendDiamond+secondFriendDiamond+thirdFriendDiamond;

  const doubleTotal=(2*totalDiamond);


  if(totalDiamond<1000){
    return totalDiamond;
  }
 else(totalDiamond > doubleTotal)
    const newRe= totalDiamond-2000;
   return newRe;
 
}
