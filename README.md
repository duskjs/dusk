# <img src="https://i.imgur.com/tkUPrMZ.png" width="76" height="76"> Draw

### Create. Fun. Simple.

<p>
  <a href="https://www.npmjs.com/package/drawjsframework"><img src="https://img.shields.io/npm/v/drawjsframework.svg?color=%2345cdff&sanitize=true" alt="NPM"></a>
  <a href="https://github.com/draw-js/draw/releases/tag/base"><img src="https://img.shields.io/github/package-json/v/draw-js/draw?style=flat-square"></a>
</p>
<br>

Draw is build to be a progressive framework for people to use and build interfaces & web applications. Draw is build and designed from the ground up which is the most important part of this framework. It needs to be easily scalable between a library and a framework (This can differ between use case). The origin is intended to give other developers a easier time when developing.
<br><br>

## Examples:
Draw uses its own html tag called the <w-tag>. This will give your HTML pages styling in a easy way. Its as simply:
 
 ```html
<d-card>
     Welcome
</d-card>
 ```
Draw also has the abillity to use components! The way these are created is as followed:

```shell
npm run component
#Component Name: Test
#Starting generation component...
#Component created successfully

npm run component
#Component Name: TestTwo
#Starting generation component...
#Component created successfully
```
In this example you have created two components: TestComponent, TestTwoComponent.

These components will also be rendered in the order that they were created. For example you dont like the order that there are rendered in, you can change the order in compdep.json. The order will be in de component array and here you will be enable to change the order to <b> [TestTwoComponent, TestComponent] </b> . The component will now be rendered in a different order.
<br>
<br>

## Testing & Development:

Once you have Node.js installed:

```shell
# Install locally the project and execute:
npm i
```
 
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
