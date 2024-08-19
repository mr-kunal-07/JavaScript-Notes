const name = "Kunal "
const age = 18

console.log(name + age + " value"); // Outdated Syntex

const otherWayToDecStr = new String('Kunal1')

console.log(`hellow ${otherWayToDecStr} your age is ${age}`); //String Interpolation 

console.log(otherWayToDecStr[0]);
console.log(otherWayToDecStr.length);
console.log(otherWayToDecStr.toUpperCase());
console.log(otherWayToDecStr.charAt("2"));
console.log(otherWayToDecStr.indexOf("n"));

const newStr = name.substring(0, 2)
console.log(newStr);

const othStr = name.slice(-5, 2)
console.log(othStr);

const newStr1 = "    kunal"
console.log(newStr1);
console.log(newStr1.trim());//remove spaces 

const url = "https://kunal.com/collection%20book"

console.log(url.replace('%20', ''));

console.log(url.includes('kunal'));
console.log(url.includes('kunaljad'));

console.log(url.split(':'));