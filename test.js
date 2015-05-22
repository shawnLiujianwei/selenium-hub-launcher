var SeleniumHunInstance = require("./lib/SeleniumHubInstance");
var seleniumInstance = new SeleniumHunInstance();
seleniumInstance.start(4141)
.then(function(){
        return seleniumInstance.registerNode(1234,"phantomjs");
    })
.then(function(){
        return seleniumInstance.registerNode(1233,"chrome");
    })
.catch(function(err){
        console.error(err)
    })

//if(process.stdout){
//    process.stdout.on("data",function(d){
//        console.log(d.toString());
//    })
//}
//
//if(process.stderr) {
//
//    process.stderr.on("data",function(d){
//        console.error(d.toString())
//    })
//}
