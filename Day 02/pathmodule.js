const path = require('path')

// Returns the last portion of the path
const a = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(a);

// Returns the directory name of the path
const b = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(b);

// Returns the extension of the file
const c = path.extname('/foo/bar/baz/asdf/quux.html');
console.log(c);

