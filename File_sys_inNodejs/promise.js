import { readFile } from 'fs';
import fs from 'fs/promises';
let a=await fs.readFile("hello.txt");
let b=await fs.appendFile("hello.txt","\n\nappend data through promise");
console.log(a.toString());