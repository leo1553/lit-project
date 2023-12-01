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
