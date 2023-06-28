import { html, css, LitElement } from "lit";

export class Product extends LitElement {
  static properties = {
    product: {},
  };

  constructor() {
    super();
  }

  static styles = css`
    h1,
    h2 {
      margin: 0;
      color: #f0fdfa;
    }
    section {
      width: 360px;
      height: 460px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 2rem;
      border-radius: 2rem;
      background: #14b8a6;
      box-shadow: 5px 5px 10px #119c8d, -5px -5px 10px #17d4bf;

      & h1 {
        margin: 0 0 0.5rem 0.5rem;
      }

      & div {
        flex: 1 1 0;
        height: 50%;
        border-radius: 1rem;
        overflow: hidden;
        position: relative;

        background-image: url("https://fashionbiju.vteximg.com.br/arquivos/ids/172308/1-8-.png?v=637617083318630000");
        background-size: cover;
        background-position: center;

        & span {
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 1rem;
          box-shadow: inset 2px 2px 4px #b8b8b8, inset -2px -2px 4px #fafafa;
          z-index: 10;
        }

        & img {
          height: fit-content;
          width: fit-content;
        }
      }

      & h2 {
        font-size: 1rem;
        margin: 1rem 0.5rem 1rem 0;
        text-align: right;
      }

      & button {
        width: 100%;
        padding: 1rem;
        border-radius: 0.5rem;
        background-image: linear-gradient(145deg, #e8e8e8, #c3c3c3);
        box-shadow: 2px 2px 4px #b8b8b8, -2px -2px 4px #fafafa;
        border: 0;
        font-family: "Montserrat", sans-serif;
        position: relative;
        z-index: 10;
        font-weight: bold;
        font-size: 1rem;
        transition: all 1s ease-in-out;
      }

      & button::before {
        height: 100%;
        width: 100%;
        position: absolute;
        display: grid;
        place-content: center;
        content: "Buy";
        border-radius: 0.5rem;

        left: 0;
        top: 0;
        background-image: linear-gradient(145deg, #c3c3c3, #e8e8e8);
        transition: opacity 0.2s ease-in-out;
        opacity: 0;
      }

      & button:hover::before {
        opacity: 1;
      }
    }
  `;

  render() {
    return html`
      <section>
        <h1>Product</h1>
        <div>
          <span></span>
        </div>
        <h2>$ 40,00</h2>
        <button>Buy</button>
      </section>
    `;
  }
}

customElements.define("app-product", Product);
