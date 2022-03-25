const fs = require("fs");

StartGenerationComponent();

async function StartGenerationComponent()
{ 
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    readline.question(`Component name: `, (name: string) => {
        
        try
        {
            console.log(`Starting generation component...`);
            // Creating folder if not existing
            const dir = './src/component/'+name+'Component';
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            
            // Creating new component file
            fs.writeFile('./src/component/'+name+'Component/'+name+'Component.js', "", function () { console.log('Component created successfully'); });

            // Pushing component name
            let jsonComponent = JSON.parse(fs.readFileSync('metadep.json', 'utf8'));
            jsonComponent['component'].push(""+name+"Component");
            
            // Writing to JSON
            fs.writeFile('metadep.json', JSON.stringify(jsonComponent), function (err: any) { console.log('Component tracked'); });
        }
        catch(error)
        {
            console.log(error);
        }

        readline.close();
    })

}
