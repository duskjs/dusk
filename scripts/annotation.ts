const fs = require("fs");
const parser = require("./w_parser");

export class Annotation
{
    CheckFilesForAnnotation()
    {
        let files = fs.readdirSync(__dirname + "../../src/");
        
        for(let i = 0; i < files.length; i++)
            if(this.ReturnExtension(files[i]).toString().toLowerCase() == 'html') this.CheckForWombat(files[i]);
    }

    CheckForWombat(whtml: any)
    {
        let data = fs.readFileSync(__dirname + "../../src/" + whtml).toString();
        let lines = data.split(/\r\n|\n/);
        let builder = "";
        
        if(lines)
            lines.forEach((line: string) => {
                let words = line.split(" ");

                words.forEach((word)=>{ 
                    if(this.WombatFound(word)) builder += parser.ParseWombatContent(word) + " "; 
                    else builder += word + " "; 
                });
                builder += "\n";
            });

        if (!fs.existsSync('dist')) 
            fs.mkdirSync('dist')
            
            
        fs.writeFile('dist/'+whtml.substring(0, whtml.indexOf('.'))+'.html', builder, function (err: any) 
        {
            if (err) throw err;
                console.log('File is parsed successfully.');
        });
    }

    ReturnExtension(file: any)
    {
        return file.split('.').pop();
    }

    WombatFound(whtml: string)
    {
        if(whtml.includes("<w-") || whtml.includes("</w-")) return true;
        return false;
    }
}
