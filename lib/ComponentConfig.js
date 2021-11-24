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
        return `<div>

</div>
<script type="text/javascript" src="PlaceHolderClassnameComponent.js"></script>`;
    }

}

module.exports = ComponentConfig;