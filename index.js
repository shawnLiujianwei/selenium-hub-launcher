/**
 * Created by Shawn Liu on 2015/5/22.
 */

var Process = require("child_process");
var path = require("path");
var SeleniumInstance = new SeleniumHunInstance();
module.exports = {
    "startupFile": path.join(__dirname, "./startup.js"),
    "script": require("./script")
}