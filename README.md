<br>
<p align="center"><img src="https://i.imgur.com/tkUPrMZ.png" width="9%" height="9%"> </p>
<h4 align="center">draw</h4>
<p align="center">
[![NPM version](https://img.shields.io/npm/v/drawjsframework.svg)](https://www.npmjs.com/package/drawjsframework)
</p>
<br>

Draw is build to be a progressive framework for people to use and build interfaces & web applications. Draw is build and designed from the ground up which is the most important part of this framework. It needs to be easily scalable between a library and a framework (This can differ between use case). The origin is intended to give other developers a easier time when developing.
<br><br>
Draw uses its own html tag called the <w-tag>. This will give your HTML pages styling in a easy way. Its as simply:
 
 ```html
<d-card>
     Welcome
</d-card>
 ```
The way that components are rendered is as followed:

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

# ATM the compiling is a separated command:
npm run compile

# To launch the application:
npm run start
```
We recommend that the compile command has been executed before the launch command has been used.
