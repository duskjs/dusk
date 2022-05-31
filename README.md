<div align="center">
<br>
<img src="https://i.imgur.com/83SFIFy.png" width="115">

### Dusk
 
<a href="https://www.npmjs.com/package/duskjs"><img src="https://img.shields.io/npm/v/dusk.svg?color=%2345cdff&sanitize=true" alt="NPM"></a>
<a href="https://github.com/duskjs/dusk/releases/tag/base"><img src="https://img.shields.io/github/package-json/v/duskjs/dusk?color=%2345cdff&style=flat-square"></a>
</div>

> 📦  Components
> 💡   Custom Features
> ⚡️  Optimized distribution

Dusk is build to be a progressive library for people to use and build interfaces & web applications. Dusk tries to take React.component & Vue tag ideas to create a new and orignal format from scratch. Combining these ideas, an attempt is made to remove unused functionalities from production and tries to generate a optimized output as end result.
<br>

#### npm:

```shell
#Setup for npm project:
npm init -y

#Installation of the library
npm i duskjs
```
<br>

#### setup:
<hr>

> <b> THE FOLLOWING APPLICATIONS BELOW ARE TEMPORARY AND WILL BE AUTOMATED IN THE FUTURE. </b>

A folder named: 'src'. This needs to be inside the same folder as the node_modules. After the creation of the 'src'folder, create a 'index.js' inside the 'src'folder. Now we need to configurate a little. These handlings will be handled inside a future update be for now we need to do it by hand. Now were almost ready to use Dusk. We only need to edit our package.json with the following:

```shell
"component": "ExampleComponent",
"port":8085,
"scripts": {
    "compile": "node node_modules/duskjs/scripts/build.js",
    "disting": "node node_modules/duskjs/scripts/dister.js",
    "build": "npm run disting & npm run compile & node node_modules/duskjs/scripts/trasher.js",
    "serve": "node node_modules/duskjs/scripts/serve.js",
    "component": "ts-node node_modules/duskjs/lib/component/component.ts"
}
```
Inside the package.json we added the commands that can be used for Dusk. Also we included the port where Dusk needs to run on locally. And as last with the component object we give the name of the target to start with. The component will be the first building block for the application and the compiling will start from this component to create the code for the project.

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
const DuskComponent = require("duskjs/lib/component/duskComponent");

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

###### 0.2.0 goals
- [x] Serve is runned without making a build first
- [ ] Add custom css to dusk elements
- [ ] Implement the availibility of adding your own Javascript functionality to a component
- [ ] When served, reflect changes in files on local host

#### License
<hr>

Licensed under [MIT](./LICENSE).
