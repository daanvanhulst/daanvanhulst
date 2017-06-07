---
layout: post
title:  "Angular.js components with ES6"
date:   2016-09-06 16:18:35 -0600
categories: Angular.js
---

Many people have been using ES6 together with Angular in previous versions. But Angular 1.5 brings us components, which are very similar to the once that will be used in Angular 2. In this example I will be  showing you how to create a menu component and use it within a module.

### The Component: 

You can simply define a component in a separate file and then export it.

```javascript
import controller from './menu.controller';

let menuComponent = {
  restrict: 'E',
  bindings: {},
  templateUrl: 'app/components/menu/menu.html',
  controller: controller,
  controllerAs: 'vm'
};

export default menuComponent;
```

### Module using the component: 

In your module, you can then import and add the component.

```javascript
import menuComponent from './menu/menu.component';

export default angular.module('masterclass.components', [])
    .component('menu', menuComponent);

```

### Controller

The controller that we import in our component can also be defined in its own file like we did with directives.

```javascript
export default class MenuController {
  constructor () {
    'ngInject';

    this.activate();
  }

  activate() {

  }
}
```