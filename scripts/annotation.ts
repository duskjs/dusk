const fs = require("fs");
const parser = require("./w_parser");

export class Annotation
{
    CheckFilesForAnnotation()
    {
        let files = fs.readdirSync(__dirname + "../../src/");
        
        for(let i = 0; i < files.length; i++)
            if(this.ReturnExtension(files[i]).toString().toLowerCase() == 'html') this.CheckForDraw(files[i]);
    }

    CheckForDraw(whtml: any)
    {
        let data = fs.readFileSync(__dirname + "../../src/" + whtml).toString();
        let lines = data.split(/\r\n|\n/);
        let builder = "";
        
        if(lines)
            lines.forEach((line: string) => {
                let words = line.split(" ");

                words.forEach((word)=>{ 
                    if(this.DrawFound(word)) builder += parser.ParseDrawContent(word) + " "; 
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

    DrawFound(whtml: string)
    {
        if(whtml.includes("<d-") || whtml.includes("</d-")) return true;
        return false;
    }
}
