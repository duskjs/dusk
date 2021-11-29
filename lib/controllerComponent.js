const IControllerComponent = require('./component/IControllerComponent');

class ControllerComponent extends IControllerComponent
{  
    constructor(componentName){super(componentName);}

    _getComponentName(){return this.componentName;}

}
module.exports = ControllerComponent;

