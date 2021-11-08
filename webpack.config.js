// entry file,exit file,css
const path = require('path');
module.exports ={

    mode : "development", //it is working or not
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : "output.js"
    }
}