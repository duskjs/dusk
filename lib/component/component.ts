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
        }
        catch(error)
        {
            console.log(error);
        }

        readline.close();
    })

}
