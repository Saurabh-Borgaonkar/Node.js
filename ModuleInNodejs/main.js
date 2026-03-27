// EcmaScript module access using import

import {a,b,c} from "./mymodule.js"
import obj from "./mymodule.js"
console.log(a);
console.log(obj.x);
console.log(obj.y);

//commonJs module access using rquire

// const obj=require("./mymodule.js")
// console.log(obj.x);
// console.log(obj.y);