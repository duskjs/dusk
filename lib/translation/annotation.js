const fs = require('fs')
const parser = require("./d_parser");
const path = require('path')

class Annotation
{
    distpath = path.join(__dirname, '../../dist/');
    srcpath = path.join(__dirname, '../../src/');

    CheckFilesForAnnotation()
    {  
        let files = fs.readdirSync(this.distpath); 

        for(let i = 0; i < files.length; i++)
            if(this.ReturnExtension(files[i]).toString().toLowerCase() == 'html') this.CheckForDusk(files[i]);

        console.log('Files are parsed successfully.');
    }

    ParseContentAsString(files)
    {  
        let content = "";
        for(let i = 0; i < files.length; i++)
        {
            let lines = files.split(/\r\n|\n/);
            if(lines)
                content = this.BuildContent(lines);         
        }
        return content;
    }

    CheckForDusk(dhtml)
    {
        let data = fs.readFileSync(this.distpath + dhtml).toString();
        let lines = data.split(/\r\n|\n/);
 
        if(lines)
            fs.writeFile(this.distpath + dhtml.substring(0, dhtml.indexOf('.'))+'.html', this.BuildContent(lines), function (err) { if (err) throw err; });
    }

    BuildContent(content)
    {
        let builder = "";
        content.forEach((line) => {
            let words = line.split(" ");

            words.forEach((word)=>{ 
                if(this.DuskFound(word)) builder += parser.ParseDuskContent(word) + " "; 
                else builder += word + " "; 
            });
            builder += "\n";
        });
        return builder;
    }
    
    ReturnExtension(file){ return file.split('.').pop(); }

    DuskFound(dhtml)
    {
        if(dhtml.includes("<d-") || dhtml.includes("</d-")) return true;
        return false;
    }
}


module.exports = new Annotation();