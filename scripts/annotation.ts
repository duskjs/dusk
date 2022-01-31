const fs = require("fs");
const parser = require("./w_parser");

checkFilesForAnnotation();

function checkFilesForAnnotation()
{
    let files = fs.readdirSync(__dirname + "../../src/");

    for(let i = 0; i < files.length; i++)
        if(ReturnExtension(files[i]).toString().toLowerCase() == 'html') CheckForWombat(files[i]);
}

function CheckForWombat(whtml: any)
{
    let data = fs.readFileSync(__dirname + "../../src/" + whtml).toString();
    let lines = data.split(/\r\n|\n/);

    if(lines)
        lines.forEach((line: string) => {
            let words = line.split(" ");
            words.forEach((word)=>{ if(WombatFound(word)) parser.ParseWombatContent(word); });
        });
}

function ReturnExtension(file: any)
{
    return file.split('.').pop();
}

function WombatFound(whtml: string)
{
    if(whtml.includes("<w-") || whtml.includes("</w-")) return true;
    return false;
}

