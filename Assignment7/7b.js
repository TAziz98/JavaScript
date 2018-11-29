const fs = require('fs');
const express = require('express');
const url = require('url');
const app = express();
//require('log-timestamp');
//const md5 =require('md5');
app.get('/[A-z]:+/[A-z]*',function(req,res){
    var q = url.parse(req.url.toString(),true);
    var directory=q.pathname;
    directory = directory.slice( 1 );
console.log(`Watching for file changes on ${directory}`);
fs.watch(directory, (event, filename) => {
  if (filename && event==='change' || event==='rename' ) {
    console.log(`${filename} file Changed`);
    }
});
    res.send('Check Console !');
})
app.listen(8081);
