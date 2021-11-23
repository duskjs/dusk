const fs = require("fs");

StartGenerationComponent();

async function StartGenerationComponent()
{ 
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    readline.question(`Component name: `, name => {
        
        try
        {
            console.log(`Starting generation component...`);

            // Creating folder if not existing
            const dir = './component/'+name+'Component';
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }

            // Gets data from template and replaces naming
            const buffer = fs.readFileSync("./lib/template/component.js");
            const fileContent = buffer.toString();
            const data = fileContent.replaceAll("PlaceHolderExampleComponent", name+"Component");

            // Creating new component file
            fs.writeFile('./component/'+name+'Component/'+name+'Component.js', data, function (err) 
            {
                if (err) throw err;
                    console.log('Component created successfully');
            });
        }
        catch(error)
        {
            console.log(error);
        }

        readline.close();
    })

}
