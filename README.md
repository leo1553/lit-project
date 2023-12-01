# Lit Project

Base project for a [Lit](https://github.com/lit/lit) based web application.

## Dependencies

### Frontend related libraries

- [lit/lit](https://github.com/lit/lit): Web components library
- [@vaandin/router](https://github.com/vaadin/router): Routing library

<!--
### Testing related libraries

- [jestjs/jest](https://github.com/jestjs/jest): Testing library
- [@open-wc/testing](https://github.com/open-wc/open-wc): Testing utilities
-->

### Utilities:

- [microsoft/TypeScript](https://github.com/microsoft/TypeScript): Type checking
- [vitejs/vite](https://github.com/vitejs/vite): Development server and bundler

<!--
- [eslint/eslint](https://github.com/eslint/eslint): Linting
-->

## Structure

The project is structured similar to the [Angular](https://angular.io/) framework.

<pre>
lit-project/                                                # Project root
├─ dist/                                                    # Build output
├─ src/                                                     # Source files
│  ├─ app/                                                  # Application files
│  │  ├─ components/                                        # Components
│  │  |  ├─ example-component/                              # Component folder
│  │  |  |  ├─ example.component.ts                         # Component script
│  │  ├─ services/                                          # Services
│  │  |  ├─ example-service/                                # Service
│  │  |  |  ├─ example.service.ts                           # Service script
│  │  ├─ views/                                             # Pages
│  │  │  ├─ example-view                                    # View folder
│  │  │  │  ├─ example-view.component.ts                    # View component
│  │  ├─ root.component.ts                                  # Application root component
│  │  ├─ router.component.ts                                # Application router component
│  ├─ assets/                                               # Assets
│  ├─ index.html                                            # HTML entry point
│  ├─ index.ts                                              # TypeScript entry point
├─ tsconfig.json                                            # TypeScript configuration
├─ vite.config.js                                           # Vite configuration
</pre>

## Getting started

### ⭐ Premade

1. Copy the contents of the [lit-project](./lit-project) folder to your project.
2. Install dependencies using `npm install`.
3. Adjust `package.json` file to your needs.

#### Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project.

### From scratch

#### Creating the project

This step sets up the basics for running a lit application with routing. It uses [Vite](https://vitejs.dev/) as a development server and bundler.

1. Run the following commands:
    ```bash
      # Create project
      npm init

      # Install dependencies
      npm install --save lit @vaadin/router
      npm install --save-dev typescript

      # Create tsconfig.json
      npx tsc --init --module ESNext --moduleResolution bundler --target ES2020 --lib ES2020,DOM,DOM.Iterable --experimentalDecorators --useDefineForClassFields false --skipLibCheck --allowImportingTsExtensions --resolveJsonModule --isolatedModules --noEmit
    ```
2. Create `vite.config.js`:
    ```js
    import { defineConfig } from 'vite';

    export default defineConfig({
      root: 'src/',
      server: {
        open: '/index.html'
      },
      build: {
        outDir: '../dist'
      }
    });
    ```
3. Create `src/index.html`:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <base href="/">
      <title>Lit Project</title>
    </head>
    <body>
      <app-root></app-root>
      <script src="/index.ts" type="module"></script>
    </body>
    </html>
    ```
4. Create `src/index.ts`:
    ```ts
    import './app';
    ```
5. Create `src/app/index.ts`:
    ```ts
    import './root.component';
    import './router.component';
    import './views';
    ```
6. Create `src/app/root.component.ts`:
    ```ts
    import { LitElement, html } from 'lit';
    import { customElement } from 'lit/decorators.js';

    @customElement('app-root')
    export class AppRootComponent extends LitElement {
      protected render() {
        return html`
          <header>
            <h2>Header</h2>
          </header>
          <main>
            <h3>Main</h3>
            <app-router></app-router>
            <h3>Main</h3>
          </main>
          <footer>
            <h2>Footer</h2>
          </footer>
        `;
      }
    }
    ```
7. Create `src/app/router.component.ts`:
    ```ts
    import { Route, Router } from '@vaadin/router';
    import { customElement } from 'lit/decorators.js';

    const routes: Route[] = [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        component: 'app-home-view'
      },
      {
        path: '(.*)',
        component: 'app-not-found-view'
      }
    ];

    @customElement('app-router')
    export class AppRouterComponent extends HTMLElement {
      public connectedCallback(): void {
        const router = new Router();
        router.setRoutes(routes);
        router.setOutlet(this);
      }
    }
    ```
8. Create `src/app/views/index.ts`:
    ```ts
    import './home.view';
    import './not-found.view';
    ```
9.  Create `src/app/views/home.view.ts`:
    ```ts
    import { LitElement, html } from 'lit';
    import { customElement } from 'lit/decorators.js';

    @customElement('app-home-view')
    export class HomeViewComponent extends LitElement {
      protected render() {
        return html`
          <h1>Hello world!</h1>
        `;
      }
    }
    ```
10. Create `src/app/views/not-found.view.ts`:
    ```ts
    import { LitElement, html } from 'lit';
    import { customElement } from 'lit/decorators.js';

    @customElement('app-not-found-view')
    export class NotFoundViewComponent extends LitElement {
      protected render() {
        return html`
          <h1>Not found!</h1>
        `;
      }
    }
    ```
11. Add the following scripts to `package.json`:
    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build"
    }
    ```
