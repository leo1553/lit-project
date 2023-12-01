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
