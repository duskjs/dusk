module.exports = 
{ 
    getExtendsComponent: function(className)
    { 
        let path = '../../dist/component/'+className+'/'+className;
        className = require(path);
        dynamic_class=eval(className);
        return new dynamic_class(className); // OK
    },
    writeToIndex: function(content)
    {
        const fs = require('fs');
        const path = require('path');
        console.log(path.join(__dirname, '../../dist/index.html'));
        fs.appendFileSync(path.join(__dirname, '../../dist/index.html'), content);
    }
};
