module.exports = 
{
    ParseDuskContent: function(parse)
    {
        switch (true) 
        {
            case parse.indexOf("<d-row>") !== -1:
                return parse.replace("<d-row>", "<div style='padding:12px; margin:4px; display:flex; justify-content:center; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);'>");
            case parse.indexOf("</d-row>") !== -1:
                return parse.replace("</d-row>", "</div>");
            case parse.indexOf("<d-card>") !== -1:
                return parse.replace("<d-card>", "<div style='padding:12px; margin:4px; display:inline-block; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);'>");
            case parse.indexOf("</d-card>") !== -1:
                return parse.replace("</d-card>", "</div>");
            default:
                return parse;
        }
    }
};