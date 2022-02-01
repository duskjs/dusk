<br>
<p align="center"><img src="https://i.imgur.com/YHJc8Ei.png" width="10%" height="8%"> </p>
<h3 align="center">Wombat</h3>

## Introduction

Wombat is build to be a progressive framework for people to use and build interfaces & web applications. Wombat is build and designed from the ground up which is the most important part of this framework. It needs to be easily scalable between a library and a framework (This can differ between use case). The origin is intended to give other developers a easier time when developing.

## Installation

Once you have Node.js installed:

```shell
# Install locally the project and execute:
npm i
```

## Testing & Development:

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
<br><br>
If you want to launch the application you want to compile the application first. With this you can target each <w-tag> element to compile it to plain HTML. To do this the following command structure is recommended :
 
 ```
npm run compile
npm run start
```
There is ATM no otherway to do it but if you have the solution, by all means be our guest ;)
 
