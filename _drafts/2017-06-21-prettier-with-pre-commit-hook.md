---
layout: post
title:  "Prevent unformatted JavaScript commits using pre-commit hook"
date:   2017-06-21 12:12:00 +0200
categories: JavaScript
---

> Checking the code format locally before it ever reaches the ci-server.

## Prerequisites

- node.js (yarn)

# Installation

Using yarn:
`yarn add -D husky lint-staged prettier`

Using npm:
`npm install --save-dev husky lint-staged prettier`

This has installed the dependencies and we are now ready to integrate the tools with our project. 

Find your package.json file and edit it:

```
// Edit package.json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "eslint Scripts/**/*.js --ignore-pattern Scripts/vendor/**/*.js",
      "prettier --write",
      "git add"
    ]
  }
}
```

<!--Test if the installation was successful:

`swagger --version`

![Swagger version]({{ site.url }}/assets/swagger-version.png)

Then to generate a project run (I named mine 'micro-service') :

`swagger project create micro-service`-->