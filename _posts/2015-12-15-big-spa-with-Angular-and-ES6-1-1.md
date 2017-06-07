---
layout: post
title:  "Angular.js big SPA using ES6 (1/2)"
date:   2015-12-15 12:12:22 -0600
categories: Angular.js
---


#### This guide might help if you: ####
- want to create a big Single Page Application (SPA) using Angular.
- don't have much experience with big SPA's.
- don't know how to structure your SPA.
- want to be able to ensure quality.
- don't want to create your own standards.

Also see: [Part 2](/big-spa-with-angular-and-es6-2-2/)

# Intro #

The goal of this post/tutorial is to give developers who have to create a a big SPA a good starting point. Whether it is for work or a private project. There are different ways of organising your files, from which I have gone to love a module based structure. This is what we will be using here today.

This is not a guide where you will have to create everything from scratch. It will use boilerplates and set standards when possible. This will leave you free to start developing asap, and will make it easier for new people to understand your code. I will first go into details on how to set things up. After that I will create a couple of modules which will give you the idea of how to structure the application.

This will consist of two parts, where this first part will mainly be about setting up the base application. The second part will be about setting up the Angular controllers, directives and services with ES6.


# Prerequisites #

- [Node.js](http://www.nodejs.org "node.js")
- [Git for windows](https://git-scm.com/download/win "Git for windows") 

# Installation #

We'll start by setting up the base project you'll be working with. If you are creating a server and client, I recommend you create a separate folder for each:

- appname
	- client
	- server 

Install required tools yo, gulp and bower:

    npm install -g yo gulp bower

Install generator-gulp-angular:

    npm install -g generator-gulp-angular

Navigate to the client folder and run yo gulp-angular, and select desired technologies:

    yo gulp-angular

You are free to choose your preferences. These are mine:

* Angular 1.4
* All modules
* No jQuery
* Restangular for CRUD calls to API vs $http for few calls
* Bootstrap vs Angular material design (project dependend)
* UI-router
* SASS (node)
* ES6 (Babel)
* No template engine

After you have selected your preferences, 'npm install' and 'bower install' will be run. If everything goes well, you will have the base set-up. Your folder structure should look like:

![](/content/images/2017/02/app_structure.PNG)

Build the application and serve it up on a local web server:

    gulp serve

This should open your default browser with the following:

![](/content/images/2017/02/running-app.PNG)

# Structure #

Now that we have the base framework set-up, we'll look into the structure which will help when our applications get big. For this we will be focussing on the 'src/' folder. The base framework gives us the following files and folders there:

![](/content/images/2017/02/src_structure.PNG)

The 'assets/' folder is where assets to our application go. Images for example. The 'app/' folder is where the application itself will live. The index.html is the base HTML file where the Angular application is bootstrapped in and the favicon.ico speaks for itself. If we open the 'app/' folder, we'll see that a couple of files and folders have been generated again:

![](/content/images/2017/02/app_folder_structure.PNG)

The indexx files that got generated we'll keep as the starting point of our application. The 'index.module.js' file that got generated contains all the imports for the components in the 'components/' folder. This can get messy quite fast in projects with a lot of components. That is why we will create a components module which we will import, but more about this later. 

The other folder we have is the 'main/' folder. The generated main files are also all imported in the 'index.module.js' file. For this, we'll also create a module which we'll import in the index module. The last thing we'll cover in this post will be to change the current code we have to what is described above. Let us start with the index.module.js. 

```javascript
/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

/** Modules **/
import coreModule from './core.module';
import componentsModule from './components/components.module';
import mainModule from './main/main.module';

angular.module('testApp', [
  coreModule.name,
  componentsModule.name,
  mainModule.name
])
.constant('moment', moment)
.config(config)
.config(routerConfig)
.run(runBlock);

```

We removed all the separate imports, and limited to the files that are in the same folder and the modules. The file is trying to import coreModule, componentsModule, and mainModule which do not exist yet. We'll have to create them ourselves.

Create the file *'core.module.js'* in the 'src/app' folder, and add the content below. This module is used to import the core libraries for our project. It is to keep the *'index.module.js'* file clean.

```javascript
export default angular.module('testApp.core', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr'
]);
```

Create a *'component.module.js'* file in *'src/app/components'*, and add the following content:

```javascript
/** Services **/
import { GithubContributorService } from './githubContributor/githubContributor.service';
import { WebDevTecService } from './webDevTec/webDevTec.service';

/** Directives **/
import { NavbarDirective } from './navbar/navbar.directive';
import { MalarkeyDirective } from './malarkey/malarkey.directive';

export default angular.module('testApp.components', [])

.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService)
.directive('malarkey', MalarkeyDirective)
.directive('navbar', NavbarDirective);

```


Create a *'main.module.js'* file in *'src/app/main'*, and add the following content:

```javascript
import { MainController } from './main.controller';

export default angular.module('testApp.main', [
])
.controller('MainController', MainController);
```

We have now restructured the application, but there are still more things we can do to keep things organized. In the next tutorial we'll go deeper into the different aspects of the structure.

To [Part 2](/big-spa-with-angular-and-es6-2-2/)