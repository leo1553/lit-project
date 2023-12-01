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
  protected connectedCallback(): void {
    const router = new Router();
    router.setRoutes(routes);
    router.setOutlet(this);
  }
}
