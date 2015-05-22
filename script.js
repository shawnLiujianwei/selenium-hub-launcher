/**
 * Created by Shawn Liu on 15-5-22.
 */
var SeleniumHunInstance = require("./lib/SeleniumHubInstance");
var seleniumInstance = new SeleniumHunInstance();
var config = require("config").seleniumHub;
var Promise = require("bluebird");


exports.start = function () {
    return seleniumInstance.start(config.port)
        .then(function () {
            return Promise.map(config.phantom, function (port) {
                return seleniumInstance.registerNode(port, "phantomjs")
            })
        })
        .then(function () {
            return Promise.map(config.chrome, function (port) {
                return seleniumInstance.registerNode(port, "chrome");
            })
        })
        .then(function () {
            return seleniumInstance;
        })
}

exports.get = function () {
    return seleniumInstance;
}