const fs = require('fs');

const TemplateVariable = require('../const/tempConst');
const Annotation = require("../lib/translation/annotation");
const Component = require("../lib/component/componentConfig");
const app = require('../lib/app/app');

ServeServer();

async function ServeServer()
{
    try{     
        let jsonComponent = JSON.parse(fs.readFileSync('metadep.json', 'utf8'));
        console.log("Target found.");
        let content = await Annotation.ParseContentAsString(Component.getExtendsComponent(jsonComponent['component']).Render());
        console.log("Content parsed.");
        await app.setStarter(AddTemplateToContent(content));
        console.log("Content set.");
        app.executeServer();
    }
    catch(e){ console.log(e)}
}

function AddTemplateToContent(content)
{
    content += "<style>"+TemplateVariable.cssContent+"</style>";
    return content;
}