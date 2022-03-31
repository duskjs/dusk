<br>
<p><img src="https://i.imgur.com/tkUPrMZ.png" width="90"> </p>
<p align="center">
  <a href="https://www.npmjs.com/package/drawjsframework"><img src="https://img.shields.io/npm/v/drawjsframework.svg?color=%2345cdff&sanitize=true" alt="NPM"></a>
  <a href="https://github.com/draw-js/draw/releases/tag/base"><img src="https://img.shields.io/github/package-json/v/draw-js/draw?color=%2345cdff&style=flat-square"></a>
  
# Draw <img src="https://i.imgur.com/tkUPrMZ.png" width="60">

> Simple, Fast, Fun
  
<a href="https://www.npmjs.com/package/drawjsframework"><img src="https://img.shields.io/npm/v/drawjsframework.svg?color=%2345cdff&sanitize=true" alt="NPM"></a>
<a href="https://github.com/draw-js/draw/releases/tag/base"><img src="https://img.shields.io/github/package-json/v/draw-js/draw?color=%2345cdff&style=flat-square"></a>
- 📦  Components
- 💡   Custom Features
- ⚡️  Optimized distribution
  
Draw is build to be a progressive framework for people to use and build interfaces & web applications. Draw tries to take React.component & Vue tag ideas to create a new and orignal format from scratch. Combining these ideas, an attempt is made to remove unused functionalities from production and tries to generate a pure html/javascript output as end result.
<br><br>

##### Examples
<hr>

Draw uses its own html tag called the <d-tag>. This will give your HTML pages styling in a easy way. Its as simply:
 
 ```html
<d-card>
     Welcome
</d-card>
 ```
Draw also has the abillity to use components! The way these are created is as followed:

```shell
npm run component
#Component Name: Example
#Starting generation component...
#Component created successfully
```
In this example you have created the component: ExampleComponent.

This component will be placed inside the component folder. There will be a folder with the name of the component you just created. Inside the folder there is a .js file. You can create html components like:

```Javascript
const DrawComponent = require("../../../lib/component/drawComponent");

class ExampleComponent extends DrawComponent {
    Render(){
        return "<d-row> <d-card> Welcome to Draw </d-card> </d-row>";
    }
}
module.exports = ExampleComponent;
```
<br>
  
##### Testing & Development
<hr>
  
##### Requirements
- [x] A install of Node.js
- [x] Working clone of the repo, or the npm install of the project
- [x] Execution of the npm install command

These commands are work in progress and will be implemented in a custom format.

```shell
# To create a component:
npm run component
# Compiles the files inside the dist:
npm run compile
# Starts the project locally without setup:
npm run server
# Sets the files up for compilling:
npm run disting
# To launch the application:
npm run start
```
