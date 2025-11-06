# Biblioteca Wallmapu De Mesana Angular 20

### Dependencies
- [DaisyUI](https://daisyui.com/)

### Structure
```
biblioteca-wallmapu-de-medusa-angular/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts ← pendiente
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts ← pendiente
│   │   │   └── interceptors/
│   │   │       └── auth.interceptor.ts ← pendiente
│   │   │
│   │   ├── features/
│   │   │   ├── book-detail/
│   │   │   │   ├── book-detail.ts
│   │   │   │   └── book-detail.html
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero/
│   │   │   │   │   │   ├── hero.ts
│   │   │   │   │   │   └── hero.html
│   │   │   │   │   └── some-books/
│   │   │   │   │       ├── some-books.ts
│   │   │   │   │       └── some-books.html
│   │   │   │   ├── home.ts
│   │   │   │   └── home.html
│   │   │   └── not-found/
│   │   │       ├── not-found.ts
│   │   │       └── not-found.html
│   │   │
│   │   ├── layouts/
│   │   │   ├── admin-layout/
│   │   │   │   ├── admin-layout.ts
│   │   │   │   └── admin-layout.html
│   │   │   └── user-layout/
│   │   │       ├── user-layout.ts
│   │   │       └── user-layout.html
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── book-card/
│   │   │   │   │   ├── book-card.html
│   │   │   │   │   └── book-card.ts
│   │   │   │   ├── footer/
│   │   │   │   │   ├── footer.html
│   │   │   │   │   └── footer.ts
│   │   │   │   ├── login-form/
│   │   │   │   │   ├── login-form.html
│   │   │   │   │   └── login-form.ts
│   │   │   │   ├── navbar/
│   │   │   │   │   ├── navbar.html
│   │   │   │   │   └── navbar.ts
│   │   │   │   └── register-form/
│   │   │   │       ├── register-form.html
│   │   │   │       └── register-form.ts
│   │   │   ├── models/
│   │   │   │   └── book.ts
│   │   │   └── services/
│   │   │       └── book.service.ts
│   │   │
│   │   ├── app.routes.ts
│   │   └── app.component.ts
│   │
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

```sh
ng g c shared/components/navbar
ng g c shared/components/footer
ng g c shared/components/login-form
ng g c shared/components/register-form
ng g c shared/components/book-card
ng g i shared/models/book
ng g i shared/models/book-filter
ng g s shared/services/book-service

ng g c layouts/page-layout
ng g c layouts/admin-layout

ng g c features/home
ng g c features/home/components/hero
ng g c features/home/components/some-books
ng g c features/book-detail
ng g c features/book-detail/components/hero
ng g c features/dashboard
ng g c features/not-found/

ng g i core/models/user
ng g i core/models/auth-response
ng g s core/services/auth-service
```


---
---
---

# BibliotecaWallmapuDeMesanaAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
