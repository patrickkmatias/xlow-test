import { LitElement, html } from "lit";
import "../components/counter";
import "../components/product";

export class SearchResultPage extends LitElement {
  static properties = {
    _products: { state: true },
  };

  constructor() {
    super();
    fetch("https://desafio.xlow.com.br/search").then(
      async (res) => (this._products = await res.json())
    );
  }

  render() {
    return !this._products
      ? html`<p>Products are loading...</p>`
      : html`<app-counter quantity=${this._products.length}></app-counter>

          ${this._products.map(
            (product) => html`<app-product product=${product}></app-product>`
          )}

          <button @click="${() => console.log(this._products)}">
            console.log
          </button>`;
  }
}

customElements.define("search-result-page", SearchResultPage);
