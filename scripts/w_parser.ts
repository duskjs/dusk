module.exports = 
{
    ParseDrawContent: function(parse: any)
    {
        switch (true) 
        {
            case parse.indexOf("<d-card>") !== -1:
                return parse.replace("<d-card>", "<div style='width:100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);'>");
            case parse.indexOf("</d-card>") !== -1:
                return parse.replace("</d-card>", "</div>");
            default:
                return parse;
        }
    }
};