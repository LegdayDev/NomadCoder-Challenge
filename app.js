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
 */

/**
 * 객체 사용전
    const playerName = "Ronaldo";
    const playerPoint = 7;
    const playerHandsome = true;
    const playerFat = "little bit";
 */


const player = {
    name : "Ronaldo",
    points : 7,
    handsome : true,
    fat : false,
};
/**
 * 객체 사용후
    console.log(player.name);
    console.log(player.points);
    console.log(player.handsome);
    console.log(player.fat);
 */

console.log(player);

player.lastName = "Cristiano"; //선언만 하면 오브젝트에 추가됨.
player.points = 77; // 변경도 가능.
console.log(player);
