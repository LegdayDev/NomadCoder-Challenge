/**
 * integer(정수)
 * string(문자)

const num = 5;
let myName = "nico";

console.log(myName+2);
console.log(myName*2);
console.log(myName/2);

myName = 'changed_nico';

console.log(myName+2);
console.log(myName*2);
console.log(myName/2);
 */

/**
 * Boolean : true or false
 * null : 값이 비어잆다.
 * undefined : 선언만되고 정의되지 않은 변수
 
const amIFat = false;
const isNull = null; //null 과 false는 다르다.

let something; //undefined 선언되지않은상태

console.log(amIFat);
*/

/** 
 * 배열 : 데이터를 저장하는 공간 
 

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWekk = [mon, tue, wed, thu, fri, sat];

console.log(daysOfWekk);
console.log(daysOfWekk[5]);

//add one more day to the array
daysOfWekk.push("sun");

console.log(daysOfWekk);
*/

/**
 * Object
 const player = {
    name : "Ronaldo",
    points : 7,
    handsome : true,
    fat : false,
};
player.lastName = "Cristiano"; //선언만 하면 오브젝트에 추가됨.
player.points = 77; // 변경도 가능.
console.log(player);

 */


/**
 * Function(함수) 사용법
 * 선언방법
function sayHello(nameOfPerson,age){
   console.log("Hello My Name is "+ nameOfPerson + "I'm "+ age);
}

sayHello("Ronaldo", 38);
sayHello("Messi", 35);
sayHello("Son", 30);
sayHello("Kane", 29); 

 * 객체 내에서 함수 생성
player = {
   name : "Ronaldo",
   sayHello : function(otherName){
      console.log("Hello, "+otherName+" nice to meet you!");
   }
};

console.log(player.name);
player.sayHello("Messi");  

 */

/** 계산기 객체
const calculator = {
   plus : function(a,b){
      console.log(a+b);
   },
   minus : function(a,b){
      console.log(a-b);
   },
   multiply : function(a,b){
      console.log(a*b);
   },
   divide : function(a,b){
      console.log(a/b);
   },
   power : function(a,b){
      console.log(a**b);
   },
};

calculator.plus(4,5);
calculator.minus(4,5);
calculator.multiply(4,5);
calculator.divide(4,5);
calculator.power(4,5);
 */

/** return 사용
const myAge = 25;

function changeToKoreaAge(age){
   return age + 2; 
};

const koreaMyAge = changeToKoreaAge(myAge);

console.log(koreaMyAge);
 */

/** Calculator 리턴사용
const calculator = {
   plus : function(a,b){
      return (a+b);
   },
   minus : function(a,b){
      return(a-b);
   },
   multiply : function(a,b){
      return(a*b);
   },
   divide : function(a,b){
      return(a/b);
   },
   power : function(a,b){
      return(a**b);
   },
};

const plusResult = calculator.plus(3,5);
const minusResult = calculator.minus(3,5);
const multiplyResult = calculator.multiply(3,5);
const divideResult = calculator.divide(3,5);
const powerResult = calculator.power(3,5);
 */


