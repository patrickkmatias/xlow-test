import "./pages/index";

const products = fetch("https://desafio.xlow.com.br/search").then(
  async (res) => await res.json()
);

export default products;
