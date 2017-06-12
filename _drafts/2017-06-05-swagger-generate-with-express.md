---
layout: post
title:  "Swagger generate with Express"
date:   2017-06-04 11:02:00 -0600
categories: Express
---

> Swagger is the world’s largest framework of API developer tools for the OpenAPI Specification(OAS), enabling development across the entire API lifecycle, from design and documentation, to test and deployment.

## Prerequisites

- Node.js

# Install swagger

We can install swagger with the following command, giving us access to the swagger CLI.

`npm install -g swagger`

Test if the installation was successful:

`swagger --version`

![Swagger version]({{ site.url }}/assets/swagger-version.png)

Then to generate a project run (I named mine 'micro-service') :

`swagger project create micro-service`