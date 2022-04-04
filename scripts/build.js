const fs = require('fs');

const Annotation = require("../lib/translation/annotation");
const Component = require("../lib/component/componentConfig");
const App = require("../lib/app/app");

try{     
    let jsonComponent = JSON.parse(fs.readFileSync('metadep.json', 'utf8'));
    Component.writeToIndex(Component.getExtendsComponent(jsonComponent['component']).Render() ); 
}
catch(e){ console.log(e)}
finally{ Annotation.CheckFilesForAnnotation(); }
