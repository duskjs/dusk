const fs = require('fs');

const Annotation = require("../lib/translation/annotation");
const Component = require("../lib/component/componentConfig");

try{     
    let jsonComponent = JSON.parse(fs.readFileSync('metadep.json', 'utf8'));
    jsonComponent['component'].forEach(comp => Component.writeToIndex(Component.getExtendsComponent(comp).Render()) ); }
catch(e){ console.log(e)}
finally{ Annotation.CheckFilesForAnnotation(); }
