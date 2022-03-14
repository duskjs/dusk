const fs = require("fs");
const parser = require("./d_parser");

class Annotation
{
    CheckFilesForAnnotation()
    {
        let files = fs.readdirSync(__dirname + "../../src/");
        
        for(let i = 0; i < files.length; i++)
            if(this.ReturnExtension(files[i]).toString().toLowerCase() == 'html') this.CheckForDraw(files[i]);
    }

    CheckForDraw(dhtml)
    {
        let data = fs.readFileSync(__dirname + "../../src/" + dhtml).toString();
        let lines = data.split(/\r\n|\n/);
        let builder = "";
        
        if(lines)
            lines.forEach((line) => {
                let words = line.split(" ");

                words.forEach((word)=>{ 
                    if(this.DrawFound(word)) builder += parser.ParseDrawContent(word) + " "; 
                    else builder += word + " "; 
                });
                builder += "\n";
            });

        if (!fs.existsSync('dist')) 
            fs.mkdirSync('dist')
            
            
        fs.writeFile('dist/'+dhtml.substring(0, dhtml.indexOf('.'))+'.html', builder, function (err) 
        {
            if (err) throw err;
                console.log('File is parsed successfully.');
        });
    }

    ReturnExtension(file)
    {
        return file.split('.').pop();
    }

    DrawFound(dhtml)
    {
        if(dhtml.includes("<d-") || dhtml.includes("</d-")) return true;
        return false;
    }
}


module.exports = new Annotation();