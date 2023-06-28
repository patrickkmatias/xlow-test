import { html, LitElement } from "lit";

export class Counter extends LitElement {
  static properties = {
    quantity: {},
  };

  constructor() {
    super();
  }

  render() {
    return html` <div>The products quantity is ${this.quantity}</div> `;
  }
}

customElements.define("app-counter", Counter);
