const DrawComponent = require("../../../lib/component/drawComponent");

class ExampleComponent extends DrawComponent {
    Render(){
        return "<d-row> <d-card> Welcome to Draw </d-card> </d-row>";
    }
}
module.exports = ExampleComponent;