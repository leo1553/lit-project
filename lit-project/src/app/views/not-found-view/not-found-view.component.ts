import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-not-found-view')
export class NotFoundViewComponent extends LitElement {
  render() {
    return html`
      <h1>Not found!</h1>
    `;
  }
}