'use strict'

let userName=prompt('can you tell us about your name ?');
alert('welcome to our website ' + userName);
while (!userName) {
    userName=prompt('you cant leave this empty ');
    
}

let scoure = 0;











let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
if (favColor.toUpperCase()=='YES'     || favColor.toUpperCase()=='Y'   ) {
    console.log("Thats Correct answer");
    alert('thats correct answer');
    scoure++
}
else if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}



let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
if (favoriteMeal.toUpperCase()=='YES'     || favoriteMeal.toLowerCase()=='Y'   ) {
    console.log("thats correct answer");
    alert('thats correct answer');
    scoure++
}
else if (favoriteMeal.toLowerCase()=='no'  || favoriteMeal.toLowerCase()=='n'   ) {
    console.log("you don't get the answer correctly");
        alert('thats correct answer');
} else {
    alert("wrong input, please try again");
}


let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

if (myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
console.log("Thats Correct answer");
alert('alert your answer is correct');
     scoure++

} else if (myStudy.toLowerCase()=="no" || myStudy.toLowerCase()=="n") {  
    console.log("you don't get the answer correctly");
    alert('your answer is not correct ');
} else { 
alert("wrong input,please try again");
}




let favouriteColor=prompt('is my favorit color is black ?  \n (Yes-no)');

if (favouriteColor.toUpperCase()=='YES' ||  favouriteColor.toUpperCase()=='Y') {
    console.log ("Thats correct answer"); 
    alert('your answer is correct ');
    scoure++

} else if (favouriteColor.toLowerCase()=='no'  || favouriteColor.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert('your answer is not correct');
} else {
    alert("Wrong input,please try again");
    
}


let likeMywebsite=prompt(' did you like my website? \n (Yes-no) ' );

if (likeMywebsite.toUpperCase()=='YES' || likeMywebsite.toUpperCase()=='Y' ) {
    console.log("Thats Correct answer");
    alert(" yes you should be !!!  ");
    scoure++
}
else if (likeMywebsite.toLowerCase()=='no' || likeMywebsite.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert(" wrong input,please try again ");
}
else {
    alert("wrong input, please try agin");
}


let age;
let counter = 0;
let a = 0;

do { 
    age = parseInt(prompt("guess my age  you have five chanses "));

    if (age===26) {
        console.log("yor answer is correct ");
        alert("your answer is correct");
        a = 1;
    } 
     else if (age <26) {
         alert("your answer is to low from the correct answer ");
         counter +=1;
     }
    else if (age > 26) {
        alert("your answer is to high from the correct answer");
        counter +=1;
    }  else {
        alert("please enter a number");
        counter +=1;
    }
    if (counter===4) {
        alert("you toke all chansess to answer  -  the correct answer is 26");
        a =1;
    }
} while (a === 0);

let City= ['Amman' , 'Damascus' , ' cairo ' , ' Aldoha' ]
let i=0

while (i < 6) {
    let favouriteCity=prompt('can you gusses my Favourite City?');
    if (favouriteCity === City[0]  || favouriteCity === city [1] || City === favouriteCity[2] || favouriteCity===City[3] ) {
        alert('you gusses it right ');
        scoure = scoure+1
        break;
    }
     else
    { alert('thats is wrong !! try again ');
    i++
}  
if ( i===6 ) {
    alert(' you are out of try !! sorry ');
}
  for ( i = 0 ; i < City.length ; i++) {

    alert(city.length); }
}
alert('your scoure is ' + scoure );
