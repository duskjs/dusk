const fs = require('fs-extra')
const TemplateVariable = require('../const/const');

DistFiles();

async function DistFiles(){
    if (!fs.existsSync('dist')) 
        fs.mkdirSync('dist')

    await fs.copy(TemplateVariable.srcpath, TemplateVariable.distpath, function (err) { if (!err) console.log("Disting completed."); });
    await CreatingTemplateDist();
}

async function CreatingTemplateDist(){
    if (!fs.existsSync('dist')) 
        fs.mkdirSync('dist')

    fs.writeFile(TemplateVariable.indexhtml, "", (error) => { if(!error)console.log("Created index target.")});

    if (!fs.existsSync(TemplateVariable.distpath + '/style')) 
        fs.mkdirSync(TemplateVariable.distpath + '/style')

    fs.writeFile(TemplateVariable.indexcss, "", (error) => { if(!error)console.log("Created style target.")});
    try{ fs.appendFileSync(TemplateVariable.indexhtml, TemplateVariable.cssInclude); }catch(e){}finally{ try{ fs.appendFileSync(TemplateVariable.indexhtml, TemplateVariable.indexjs); }catch(e){} }
    try{fs.appendFileSync(TemplateVariable.indexcss, TemplateVariable.cssContent); }catch(e){}
}
