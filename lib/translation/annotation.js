const fs = require('fs')
const parser = require("./d_parser");
const path = require('path')

class Annotation
{
    distpath = path.join(__dirname, '../../dist/');

    CheckFilesForAnnotation()
    {  
        let files = fs.readdirSync(this.distpath); 

        for(let i = 0; i < files.length; i++)
            if(this.ReturnExtension(files[i]).toString().toLowerCase() == 'html') this.CheckForDusk(files[i]);

        console.log('Files are parsed successfully.');
    }

    CheckForDusk(dhtml)
    {
        let data = fs.readFileSync(this.distpath + dhtml).toString();
        let lines = data.split(/\r\n|\n/);
        let builder = "";
        
        if(lines)
            lines.forEach((line) => {
                let words = line.split(" ");

                words.forEach((word)=>{ 
                    if(this.DuskFound(word)) builder += parser.ParseDuskContent(word) + " "; 
                    else builder += word + " "; 
                });
                builder += "\n";
            });

        fs.writeFile(this.distpath + dhtml.substring(0, dhtml.indexOf('.'))+'.html', builder, function (err) { if (err) throw err; });
    }

    ReturnExtension(file){ return file.split('.').pop(); }

    DuskFound(dhtml)
    {
        if(dhtml.includes("<d-") || dhtml.includes("</d-")) return true;
        return false;
    }
}


module.exports = new Annotation();