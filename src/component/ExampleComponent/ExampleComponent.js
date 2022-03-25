const DrawComponent = require("../../../lib/component/drawComponent");

class ExampleComponent extends DrawComponent {
    constructor(){super();}

    Render(){
        return "<div><h1>Test of example</h1></div> ";
    }
}
module.exports = ExampleComponent;
