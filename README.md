## Important links

[Angular folder structure](https://angular.dev/reference/configs/file-structure)

[Typescipt class member visibility: private, protected, public](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

[Angular 18 doesn't support asset folder, it's moved to public](https://www.reddit.com/r/angular/comments/1d4m4qg/images_not_loading_in_angular_18/)
to get past this add the path, eg- ``"./src/assets"`` inside ``"assets"`` inside ``angular.json``


generate component *user* `ng generate component user`

[Outputting dynamic data](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43797676#overview): we can specify angular code inside html using 2 ways
* string interpolation `<img [src]="'./assets/users/'+selectedUser.avatar" [alt]="selectedUser.name"/>`, we can also specify and use `getter` methods here
* property binding `<img [src]="'./users/'+selectedUser.avatar"/>`



[using angular's zone.js for state detection ](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788534#overview) zone.js notifies angular about events,expired timers etc. this is how states work in angular and it has been around since angular 2


# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
