---
layout: post
title:  "Angular multiple environments"
date:   2017-02-09 18:11:55 -0600
categories: Angular
---

#### Why multiple environments?

When developing your front end application, you often deal with multiple environments. You write your code locally, but then when you deploy you manually have to change the URL's to your API. Ideally we want to have multiple environments setup that we no longer have to worry about this problem.

#### Which environments?

At the moment of writing, when running angular-cli for a new project, you will get the following environments:

- source (source)
- prod (production)
- dev (development)

The idea behind the following files is that source is a local file which does not get used by the build. If you are running our application locally, this will be the file used.

The prod and dev file are designed to be used by the build. In the current project I am working on, the development and source file are the same, and also use the same file. But you might want separate files for reasons.

#### Where can I find them?

The environments can be found in the angular-cli.json file. This also shows us which environment maps to which file:

```json
"environments": {
  "source": "environments/environment.ts",
  "dev": "environments/environment.dev.ts",
  "prod": "environments/environment.prod.ts"
}
```

The files are located in 'src/environments' folder, and has the files matching to our angular-cli.json file:

```
├── environments
├──── environment.ts
├──── environment.dev.ts
├──── environment.prod.ts
```

The file simply exports a constant. Note that I have added 'apiBaseUrl' here.

# environment.ts
```javascript
export const environment = {  
  production: false,
  apiBaseUrl: "localhost:8080/api"
};
```

# environment.prod.ts
```javascript
export const environment = {  
  production: true,
  apiBaseUrl: "/api"
};
```

#### How to use them?

You can use this an a service like so:

```javascript
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: Http) {

  }
}
```

#### How to run?

At this point you have setup your application to support multiple environments, but you still have to run the application using the correct environment!

By default, the application will run in the dev (development) environment. So if you are developing you can simply run:
```
# To serve
ng serve
ng serve -dev

# To build
ng build
ng build -dev
```

You might have already guesed it by now, but to run the application in production:
```
# To serve
ng serve -prod

# To build
ng build -prod
```
