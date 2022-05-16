<div align="center">
<br>
<img src="https://i.imgur.com/vkhe3qu.png" width="150">
  
### Dusk
 
<a href="https://www.npmjs.com/package/duskjs"><img src="https://img.shields.io/npm/v/dusk.svg?color=%2345cdff&sanitize=true" alt="NPM"></a>
<a href="https://github.com/duskjs/dusk/releases/tag/base"><img src="https://img.shields.io/github/package-json/v/duskjs/dusk?color=%2345cdff&style=flat-square"></a>
</div>

> 📦  Components
> 💡   Custom Features
> ⚡️  Optimized distribution

Dusk is build to be a progressive framework for people to use and build interfaces & web applications. Dusk tries to take React.component & Vue tag ideas to create a new and orignal format from scratch. Combining these ideas, an attempt is made to remove unused functionalities from production and tries to generate a optimized output as end result.
<br>

#### npm:

```
npm i duskjs
```

##### Examples
<hr>

Dusk uses its own html tag called the d-tag. This will give your HTML pages styling in a easy way. Its as simply:
 
 ```html
<d-card>
     Welcome
</d-card>
 ```
Dusk also has the abillity to use components! The way these are created is as followed:

```shell
npm run component
#Component Name: Example
#Starting generation component...
#Component created successfully
```
In this example you have created the component: ExampleComponent.

This component will be placed inside the component folder. There will be a folder with the name of the component you just created. Inside the folder there is a .js file. You can create html components like:

```Javascript
const DuskComponent = require("../../../lib/component/duskComponent");

class ExampleComponent extends DuskComponent {
    Render(){
        return "<d-row> <d-card> Welcome to Dusk </d-card> </d-row>";
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
npm run execute
# Sets the files up for compilling:
npm run disting
# To launch the application:
npm run serve
```
