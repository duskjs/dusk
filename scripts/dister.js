const fs = require('fs-extra')
const path = require('path');
const srcpath = path.join(__dirname, '../src/');
const distpath = path.join(__dirname, '../dist/');
const indexhtml = distpath + '/index.html';
const indexjs= "<script src='index.js'></script>";
const indexcss = distpath + '/style/index.css';
const cssInclude= "<!DOCTYPE html><html><head><link rel='stylesheet' href='/style/index.css'></head><body>";
const cssContent = "body{ font-family: Arial, Helvetica, sans-serif; font-size: 13px;}";

DistFiles();

async function DistFiles(){
    if (!fs.existsSync('dist')) 
        fs.mkdirSync('dist')

    await fs.copy(srcpath, distpath, function (err) { if (!err) console.log("Disting completed."); });
    await CreatingTemplateDist();
}

async function CreatingTemplateDist(){
    if (!fs.existsSync('dist')) 
        fs.mkdirSync('dist')

    fs.writeFile(indexhtml, "", (error) => { if(!error)console.log("Created index target.")});

    if (!fs.existsSync(distpath + '/style')) 
        fs.mkdirSync(distpath + '/style')

    fs.writeFile(indexcss, "", (error) => { if(!error)console.log("Created style target.")});
    try{ fs.appendFileSync(indexhtml, cssInclude); }catch(e){}finally{ try{ fs.appendFileSync(indexhtml, indexjs); }catch(e){} }
    try{fs.appendFileSync(indexcss, cssContent); }catch(e){}
}
