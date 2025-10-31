# Biblioteca Wallmapu De Mesana Angular 20

### Dependencies
- [DaisyUI](https://daisyui.com/)

### Structure
```
biblioteca-wallmapu-de-medusa-angular/
├── src/
│   ├── app/
│   │   ├── core/                   ← Servicios globales y únicos
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts ← Único, global, usado por guards/interceptors
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   └── interceptors/
│   │   │       └── auth.interceptor.ts
│   │   │
│   │   ├── shared/                 ← Componentes y servicios reutilizables
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   └── sidebar/
│   │   │   ├── directives/
│   │   │   └── services/
│   │   │       ├── book.service.ts ← Reutilizable en múltiples features
│   │   │       └── user.service.ts ← Reutilizable en múltiples features
│   │   │
│   │   ├── features/               ← Módulos de funcionalidad
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   │
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts  ← Usa AuthService del core/
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   │
│   │   │   └── admin/                  ← Protegido por AuthGuard
│   │   │       ├── dashboard/
│   │   │       │   ├── dashboard.component.ts
│   │   │       │   ├── dashboard.component.html
│   │   │       │   └── dashboard.component.css
│   │   │       │
│   │   │       ├── libros/             ← Usa BookService del shared/
│   │   │       │   ├── libros-management.component.ts
│   │   │       │   ├── libros-management.component.html
│   │   │       │   └── libros-management.component.css
│   │   │       │
│   │   │       └── usuarios/           ← Usa UserService del shared/
│   │   │           ├── usuarios-management.component.ts
│   │   │           ├── usuarios-management.component.html
│   │   │           └── usuarios-management.component.css
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
ng g c features/home
ng g c features/home/components/hero

ng g c features/login
ng g c features/dashboard
ng g c features/not-found/

ng g c shared/components/navbar
ng g c shared/components/footer
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
