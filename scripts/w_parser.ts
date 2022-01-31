module.exports = 
{
    ParseWombatContent: function(parse: any)
    {
        switch (true) 
        {
            case parse.indexOf("<w-card>") !== -1:
                return parse.replace("<w-card>", "<div>");
            case parse.indexOf("</w-card>") !== -1:
                return parse.replace("</w-card>", "</div>");
            default:
                return parse;
        }
    }
};