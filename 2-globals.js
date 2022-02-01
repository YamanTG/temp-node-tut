// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// modulee - info about current module (file)
// process - info about env where the prigram is being executed

console.log(__dirname);
setInterval(()=> {
    console.log("Hello World!");
}, 1000)