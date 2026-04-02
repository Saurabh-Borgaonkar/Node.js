const path = require('node:path');
let a=path.basename('C:\\temp\\myfile.html');
console.log(a);
let b=path.dirname('C:\\temp\\myfile.html');
console.log(b);
console.log(path.extname('index.html'));
// Returns: 'C:\\temp\\myfile.html'
