<br>

  

<h2  align="center">
	Empty State Component
</h2>

<p  align="center">

<img  alt="GitHub release"  src="https://img.shields.io/badge/release-v1.0.0-orange.svg?style=for-the-badge"/>

<img  alt="poi"  src="https://img.shields.io/badge/poi-10-green.svg?style=for-the-badge"/>

</p>

  

<br>

  
  

## Intro

- Vue Empty state component

Yet another empty state component. The Basic idea is that you can place the component anywhere in your code and pass in the data object. The component will listen to the data object and when ever it is empty it will show the component conents.

 
## Screenshots

<p  align="center">

<img  width="100%"  src="./src/assets/screen-shot.png"/>

</p>

  

<br>

  

## Demo

  

```bash

# clone empty state component

git clone https://github.com/pharzan/chatchamp-empty-state chatchamp-empty-state

  

# install dependices

yarn

  

# to run the demo

yarn demo
```

Locate to http://localhost:4000

```sh

# to run the component alone

yarn dev


# to run the tests

yarn test

 ````

## Instalation and usage

To install the component you can use the following to install it in your project.

````bash

npm install --save chatchamp-empty-state

````

To use the component anywhere in your project, place the source code somewhere in your components folder in your project and use it as a component in the App.vue file.


````js
import EmptyState from 'chatchamp-empty-state'
Vue.component('EmptyState', EmptyState)
````

Now you can use the tag anywhere in your project and pass in the parameters to control the component

`````js
<EmptyState :data="data" v-on:click="counter++"/>
`````

to add the style you need to import the styles from the dist folder.

```js
import 'chatchamp-empty-state/dist/chatchamp-empty-state.css'
```

## API


<details><summary><strong>Component parameters:</strong></summary>

<br>

  

1. **`data`**: Number, String, Object, Array

2. **`image`**: String

The image to be displayed

3. **`title`**: String

The Title to be displayed

4. **`subTitle`**: String

The subTitle to be displayed

5. **`on-click`**: Function

**params**: func ( ...param )
function  when the callback button is clicked


<br/>

</details>


## Tests

To run the test 

````
npm run test
````

## Future improvments

1. use slots and templates to improve re-usability
2. add more preset scenarios for different usages with texts and icons ex. search, table, ...

##  License

