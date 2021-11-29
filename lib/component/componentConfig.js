class ComponentConfig
{
    ReturnPresetJS()
    {
        return `const ControllerComponent = require("../../../lib/controllerComponent");
class PlaceHolderClassnameComponent extends ControllerComponent
{
    constructor(){super('PlaceHolderClassnameComponent')}

}

module.exports = PlaceHolderClassnameComponent;
`;
    }

    ReturnPresetHTML()
    {
        return `<div></div>`;
    }

}

module.exports = ComponentConfig;