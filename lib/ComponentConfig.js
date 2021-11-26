class ComponentConfig
{
    ReturnPresetJS()
    {
        return `class PlaceHolderClassnameComponent
{
    constructor(){

    }

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