This is the second post of a series about big SPA with Angular and ES6. In the [first post]() we've set a couple of things up to improve upon. This post will go deeper into tricks and tips that will help once your application becomes bigger. Before we continue coding, we'll take a small step back and discuss some of the things we have already created.

# File structure #

We've already created some files, but haven't discussed why or how. Forx the most part, I always stick to [johnpapa's styleguide](https://github.com/johnpapa/angular-styleguide). This works great for Angular with ES5, and a lot can be used for ES6. If you have never seen this guide before, I recommend going through it. In the 'src/app' folder we currently have two sub folders. The 'components/' folder that will contain components that we create. And the 'main/' folder which contains our main module. I call these things modules, which might be a bit confusing since Angular also uses the word modules. Whenever I talk about Angular modules, I will put 'Angular' in front of it.

![](/content/images/2017/02/app_folder_structure-1.PNG)

I would recommend only putting components in the components folder which will be reused throughout your entire application. If you create a component which will only be used once or twice within the same module, it is mostly better to store it in that specific module. This depends very much on the context. If for example you have one module that is about football, and you create a component to show the last match your team played, and you are only displaying this in a single locations. It is better to store it under the football module instead of components.


## Components ##

In recent SPA's I have worked on, we got to about 15/20 components which isn't huge. If we would create separate folders for each component, it will be easy to lose the overview. This is why we should divide our components up into several sub folders. There isn't a single way you should structure your components, because it depends on the amount you have. There are however some sub folders you could create depending on your project:

- Helpers
- Filters
- Models

### Helpers ###

Helpers are small, reusable functions. If you have a couple of helpers, you can store them in one Angular service. If you get more, you can create several services per type. An example of a helper-function is:

```javascript	

toFilename(filename) {
  return filename
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^w-]+/g,'');
}

```

Note that Angular already has quite some helper functions like: isNumber, isFunction, etc. So be carefull not to reinvent the wheel.

### Filters ###

Just a place to put your custom Angular filters. Same as with the helper functions don't reinvent the wheel. There is a great [library called angular-filter](https://github.com/a8m/angular-filter) available which has a bunch of very good filters.

### Models ###

Here you can put your models (as the M in MVC), which you'll be able to use within your application. With ES6 you can create actual classes which will represent you data. If, for example, you are making an application about music albums. You could have the following model:

```javascript
class Album {
  constructor(data) {
    this.name = data.name;
    this.artist = data.artist;
    this.releaseDate = data.releaseDate;
    this.price = data.price;
  }
}
```

When you would receive JSON from your API which represents an album, you'll pass the payload into your model and create an actual Album object out of it. This way of working makes it clear which objects there are within the application, and it helps with auto complete in different IDE's.

## Modules ##

Modules are different states that the user can navigate to. In most applications I have worked on, each of these represent a link in the menu. I would suggest that for each module that you use, you create its own Angular module like we have done in the 'main/' folder. Modules can also have sub-modules, which won't be different from their parents in the sense of structure.

Let us create an module with sub-module. We'll make a module which will allow us CRUD functionality on a list of music albums.

![](/content/images/2017/02/album-module-structure.PNG)

The structure of the files looks the same as in our main module. But you can see that 3 folders have been added and a '.spec.js' and '.scss' file have been added. Respectively these are a test and styling file, and they are part of a module so that each module can live on its own. If you would copy a module out, and place it into another project. You wouldn't have to copy the tests or style from another location. 

If we open the create folder, we'll see the following files:

![](/content/images/2017/02/album-create-structure.PNG)

The sub-module's files will always start with the name of the main module and then a dash. This is done so that when you have this file open in your favourite IDE, you can see that it is part of the 'album' module. The sub-modules don't actually have Angular module files, but will be imported in the 'album.module.js'. In theory you can nest your modules endlessly. But from experience I stick to 3 modules deep, because otherwise it will get too complicated.

# End note #

Every time I create a new application, I find better ways to structure my code. If you are working in a team, it is very important to do reviews of each others work. If someone does not stick to the agreed structure, you will have to tell him/her. We do this by using [pull request](https://help.github.com/articles/using-pull-requests/). Another thing that helps is if you have some way of calculating your technical debt. But for this we are already entering the area of DevOps, which I will try to create a post on soon. If you have any questions, or ideas which could help make this structure better, please don't hesitate to leave a comment.

Back to [part 1](/big-spa-with-angular-and-es6-1-2/)

