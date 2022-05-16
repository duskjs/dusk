const DuskComponent = require("../../../lib/component/duskComponent");

class ExampleComponent extends DuskComponent {
    Render(){
        return "<d-row> <d-card> Welcome to Dusk </d-card> </d-row>";
    }
}
module.exports = ExampleComponent;