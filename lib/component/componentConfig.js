module.exports = 
{ 
    getExtendsComponent: function(className)
    { 
        let path = '../../../../src/component/'+className+'/'+className;
        className = require(path);
        dynamic_class=eval(className);
        return new dynamic_class(className);
    },
    writeToIndex: function(content)
    {
        const fs = require('fs');
        const path = require('path');
        fs.appendFileSync(path.join(__dirname, '../../../../dist/index.html'), content);
    }
};
