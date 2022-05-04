const path = require('path');

module.exports = {
    srcpath: path.join(__dirname, '../src/'),
    distpath: path.join(__dirname, '../dist/'),
    indexhtml: path.join(__dirname, '../dist/') + '/index.html',
    indexjs: "<script src='index.js'></script>",
    indexcss: path.join(__dirname, '../dist/') + '/style/index.css',
    cssInclude: "<!DOCTYPE html><html><head><link rel='stylesheet' href='/style/index.css'></head><body>",
    cssContent: "body{ font-family: Arial, Helvetica, sans-serif; font-size: 13px;}",
}