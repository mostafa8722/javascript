const fun1 = function () {};
const fun2 = function () {
  const obj = {};
  return obj;
};

class user {}
const singleTon = function () {};
const obj1 = {};
const obj2 = new Object();
const obj3 = Object.create(null);
const obj4 = new fun1();
const obj5 = new fun2();
const obj6 = new user();
const obj7 = new singleTon();

console.log("objects....");
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);
console.log(obj7);

console.log(Object.getPrototypeOf(obj1));
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj3));
console.log(Object.getPrototypeOf(obj4));
console.log(Object.getPrototypeOf(obj5));
console.log(Object.getPrototypeOf(obj6));
console.log(Object.getPrototypeOf(obj7));

// call,apply,bind
const obj_person1 = {
  name: "mostafa",
  family: "nazarband",
};
const fun3 = function (age, year) {
  console.log(this.name + " " + this.family + "\n" + age + " " + year);
};
fun3.apply(obj_person1, [20, 1300]);
fun3.call(obj_person1, 30, 1400);
fun3.bind(obj_person1, 40, 1500)();

// slice  , imutable
const arr1_slice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2_slice = arr1_slice.slice(2); // [3,4,5,6,7,8,9,10]
const arr3_slice = arr1_slice.slice(2, 5); // index of 5-1 [3,4,5]
const arr4_slice = arr1_slice.slice(4, 2); // index of 2-1 []

console.log(arr1_slice);
console.log(arr2_slice);
console.log(arr3_slice);
console.log(arr4_slice);

// splice
const arr1_splice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const arr2_splice = arr1_splice.splice(2); //  arr1_splice is [1,2] , arr2_splice is [3,4,5,6,7,8,9,10]
//const arr2_splice = arr1_splice.splice(2,5); //  arr1_splice is [1,2,8,9,10] , last index is 5-1+2(6) arr2_splice is [3,4,5,6,7]
const arr2_splice = arr1_splice.splice(2, 5, 13, 15); //  arr1_splice is [1,2,13,15,8,9,10] , last index is 5-1+2(6) arr2_splice is [3,4,5,6,7]
console.log(arr1_splice);
console.log(arr2_splice);

// first order && pure
const fun4 = function () {
  console.log("first order");
};

// high order
const func5 = function (func) {
  return fun4;
};

func5(fun4());

// var , let , const
// var is a global scope
// let is block scope (local scope)
// const is block scope and notchangeable

// json
const json1 = { name: "ali", family: "nazar" };

const json3 = JSON.stringify(json1);
const json2 = JSON.parse(json3);
console.log(json2);
console.log(json2.hasOwnProperty("name"));
//console.log(json2.hasOwn("name"));
console.log(json2.isPrototypeOf(json1));
console.log(json3);

const unaryFunc = (a, b, c) => a + b + c;
const curryfunc = (a) => (b) => (c) => a + b + c;
console.log(curryfunc(1)); // (b)=
console.log(curryfunc(1)); // (b)=
console.log(curryfunc(1)(2)(3)); // (b)=>(c)=>a+b+c

const aa = 1;
switch (aa) {
  case 0:
    console.log("this is zero");
    break;
  case 1: {
    let name = "mostafa";
    console.log("this is one");
    break;
  }
  case 2:
    let name = "mostafa";
    console.log("this is two");
    break;
  default:
    console.log("unknow");
    break;
}

// IIFE Immediately Invoked Function Expression
(function () {
  console.log(message); // undefined
  var message;
  console.log("Immediately Invoked Function Expression");
})();
//console.log(message) refrence error
const AddMemoization = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("cached before ...");

      return cache[value];
    } else {
      console.log("caching ...");
      let res = "the result is " + value;
      cache[value] = res;
      return res;
    }
  };
};
const addMemoization = AddMemoization();
console.log(addMemoization(30));
console.log(addMemoization(20));
console.log(addMemoization(30));

// closure
const welcomeClosure = function (name) {
  return function (message1, message2) {
    console.log(message1 + message2 + " " + name);
  };
};

const welcome = welcomeClosure("mostafa");
welcome("welcome ", "to");
welcome("welcome ", "to mr");

localStorage.setItem("name", "mostaf nazar");
console.log(sessionStorage.getItem("name"));
console.log(localStorage.getItem("name"));
localStorage.removeItem("name2");
localStorage.clear();

// web Worker
let ii = 0;
const timeCountWorker = function () {
  ii += 1;

  postMessage(ii);
  // setTimeout("timeCountWorker()",500)
};
timeCountWorker();

// Promise
const promise = new Promise((resolve, reject) => {
  resolve("fullfilled");
});
promise.then((value) => console.log(value));

const promise2 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("this is resolved");
    }, 1000);
  },
  (reject) => {
    setTimeout(() => {
      console.log("this is rejected");
    }, 2000);
  }
);

promise2.then((val) => console.log(val)).catch((val) => console.log(val));
//console.log(promise2)

const sum = [1, 2, 3].reduce((total, number) => total + number);
console.clear(sum);

const promise3 = new Promise((resolve, reject) => {
  resolve("fullfilled1");
});
const promise4 = new Promise((resolve, reject) => {
  reject("rejected4");
});
const promise5 = new Promise((resolve, reject) => {
  reject("rejected");
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve6");
  }, 100);
});
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected7");
  }, 200);
});
Promise.all([promise3, promise4, promise5])
  .then((res) => console.log("promise resolve", res[0]))
  .catch((err) => console.log("promise reject", err));
Promise.race([promise6, promise7])
  .then((res) => console.log("race resovle", res))
  .catch((err) => console.log("race reject", err));

let user11 = { name: "mostafa", family: "nazar" };
console.log(user11);
delete user11.name;
console.log(user11);

console.log(navigator.platform);

const input = document.querySelector("input");
console.log(input.getAttribute("type"));
console.log(input.getAttribute("value"));

const aaa = "Hello World!";
const aaa2 = /Heldlo/i;
console.log(aaa.includes("hello"));
console.log(aaa.includes("Hello"));
console.log(aaa.indexOf("Hello2"));
console.log(aaa2.test(aaa));
console.log(aaa.search(aaa2));
/*console.log(location.href)
console.log(location.protocol)
console.log(location.port)
console.log(location.pathname)
console.log(location.hostname)
console.log(location.hash)
console.log(location.search)*/

const obj123 = { name: "mostafaww" };
Object.freeze(obj123);
//Object.seal(obj123)
obj123.name = "ali";
obj123.family = "ali";
console.log(obj123);
console.log(navigator.language);
console.log(navigator.languages);

const obj1_assign = { a: 1, b: 2, c: 3 };
const obj2_assign = { a: 4, c: 5 };
const obj3_assign = Object.assign(obj1_assign, obj2_assign);
const obj4_assign = Object.assign({}, obj2_assign);
console.log(obj1_assign);
console.log(obj2_assign);
console.log(obj3_assign);
console.log(obj3_assign == obj1_assign);
console.log(obj3_assign === obj1_assign);
console.log(obj4_assign === obj2_assign);
console.log(obj4_assign == obj2_assign);

for (let [key, val] of Object.entries(obj1_assign)) {
  console.log(key);
  console.log(val);
}
for (let val of Object.values(obj1_assign)) {
  console.log(val);
}
for (let key of Object.keys(obj1_assign)) {
  console.log(key);
}

let obj_set = {a:"name",b:'ali',c:"reza",d:"hossein",d:"amir"}

let obj_set2 = new Set();
obj_set2.add(obj_set)

console.log(obj_set)
console.log(obj_set2)
console.log(obj_set2.size)
console.log(obj_set2.has(obj_set))


const arr_set = ["a","b","c","a"]
const arr_set2 =new Set(arr_set);
console.log(arr_set2)
console.log(arr_set2.size)
console.log(arr_set2.has("a"))
console.log(arr_set2.has("aa"))
console.log(arr_set2.delete("a"))
console.log(arr_set2)

// encoding url
let urrl = "https://www.google.com?q=مصطفی"
console.log(encodeURI(urrl))

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("penapple",500)
  console.log(fruits)
  console.log(fruits.size)
  console.log(fruits.keys())

  console.log(fruits.values())
  console.log(fruits.entries())

  for(let key of fruits.keys()){
console.log(key)
  }



  let obj_accessor = {
    firstName:"mostaf",
    lastName:"nazar",
    set SetName(name){
    this.firstName = name;
    },
    get getName(){
        return this.firstName+" "+this.lastName;
    }
  }
  console.log(obj_accessor)
  console.log(obj_accessor.getName)
  obj_accessor.SetName = "ali"
  console.log(obj_accessor)

  let obj_pr = {};
  Object.defineProperty(obj_pr,"name",{
    value:"mostafa",
    writable:false
  })
  console.log(obj_pr)

  const iteratable = ["a","b","c"];
  const iterator = iteratable[Symbol.iterator]()

  console.log(iterator.next())
  console.log(iterator.next())
  console.log(iterator.next())
  console.log(iterator.next())

  const bbb =  [2,3,5,1,2]
console.log(bbb.sort((a,b)=>b-a))
console.log(Math.min(...bbb))
console.log(Math.max(...bbb))
var x = 20;
x= (x++,x++,3*x)
console.log(x)

for(var i=0;i<4;i++) {
  setTimeout(()=>console.log(i))
}

for(let i=0;i<4;i++) {
  setTimeout(()=>console.log(i))
}
let ss = "heko peter";
let ss2 = /Heko/i
let ss3 = 1.2
console.log(ss2.test(ss))
console.log(~~ss3)
console.log(ss.repeat(3))
// shallow copy
let bb = {name:"mostafa",family:"nazar",age:12}
let bb2= bb;
bb2.age = 22;
console.log(bb)
console.log(bb2)

// deep copy
let bb3 = {name:bb.name,family:bb.family,age:bb.age}
bb3 .age =32;
console.log(bb)
console.log(bb3)
console.log("ggg",+!+[])
let cc = [false,NaN,undefined,null,1,3];
console.log(cc.filter(Boolean))
let ac = new Set([1,2,3,4,5,6,7,7]);
console.log(ac.size);
console.log(ac.has(2));
console.log(...ac);

const countries = [
  {name:"iran",code:98},
  {name:"USA",code:1},
  {name:"UAE",code:97},
  {name:"Turkey",code:90}
]

let codes =Array.from(countries,({code})=>code)
//console.log(`%c ${codes}`,'color:red;background:blue')

//console.table(countries)

// primitive data types : ,  string ,number,boolean, null , undefined

console.log("primitive data types")
let rr = "ali"
let rr2 = rr
 rr = "mostafa"

console.log(rr)
console.log(rr2)

let gg = {name:"ali"}
let gg2 = gg;
gg.name = "hossein2"

console.log(gg)
console.log(gg2)

localStorage.setItem("name","ditty.ir")
console.log(localStorage)
console.log(localStorage.getItem("name"))
localStorage.clear();
console.log(localStorage.getItem("name"))
console.log(localStorage)
// banana

var str = "ba"+ +"a"+"a";
console.log(str.toLocaleLowerCase())

for(var i=0;i<10;i++){

}

var obj= {name:"mostafa",family:"nazar"}
var arr= ["mostafa","nazar"];
for (var a in obj){
  console.log(a)
}

for (var a of arr){
  console.log(a)
}

arr = [1,1,3,4,4,4,5];
console.log(...new Set(arr))

var mm = true && true && "ali";
var mm2 = true && true && "mostafa" && true &&  "ali";
var mm3 = "ali" || false;
var mm4 = "ali" || false || "ali2";
var mm5 = +"3";

console.log("mmmmmmmmmmm===>")
console.log(mm) // ali
console.log(mm2)// ali
console.log(mm3)// ali
console.log(mm4)// ali
console.log(typeof mm5)

const bvv = [3, 2, 1];
console.log(bvv)
console.log(bvv.sort())
console.log(bvv.sort()===bvv)

const x10 = parseInt('10')
const y10 = x10

console.log(x10 === y10)



// closure function ...
function init(){

  var counter_closure = 10;
  return function jump(){
    counter_closure ++;
    return counter_closure;
  }
}

let jump =init();
console.log("jump closure");
console.log(jump());  //11
console.log(jump()); //12
console.log(jump());//13
var xx = ""
console.log(!!xx ? "this is true": "this is false");



