<br>
<p align="center"><img src="https://i.imgur.com/woXH17D.png" width="120" height="72"> </p>
<h3 align="center">Meta.js</h3>

## Introduction

MetaJS is build to be a progressive framework for people to use and build interfaces & web applications. MetaJS is build and designed from the ground up which is the most important part of this framework. It needs to be easily scalable between a library and a framework (This can differ between use case). The origin is intended to give other developers a easier time when developing.

## Testing & Development
To use MetaJS ATM, you need to run the index.js file with the node command or the NPM command:
```TypeScript
node index.js
npm run start
```

<p align="center"><img src="https://media1.giphy.com/media/91Z5o8YS7aK2hPNN97/giphy.gif?cid=790b761106d23481f08de15856ece798a014113d110faeb1&rid=giphy.gif&ct=g" width="480" height="184"> </p>

### Commands:

These commands are work in progress and will be implemented in a custom format.

```shell
# To create a component:
npm run component

# The npm implementation for launching:
npm run start
```

### Example component:
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

## Testing
<p>Thank you for contributing to MetaJS!

Before creating a pull request with new development, please run the tests to ensure that everything is working great. It would also be a good idea to run the tests before starting development to distinguish problems between your environment and the MetaJS software. </p>

#### Commit conventions
<table>
<thead>
<tr>
<th>Commit convention</th>
<th>Description</th>
</tr>
</thead>
<tbody>
 
<tr>
<td>+</td>
<td>A new addition to the project or a general addition</td>
</tr>
<tr>
<td>+-</td>
<td>A change in the project</td>
</tr>
<td>-</td>
<td>Something is removed form the project</td>
</tr>
</tbody>
</table>
