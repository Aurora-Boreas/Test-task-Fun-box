import React from "react";
import ReactDOM from "react-dom";
import PromoList from "./components/index.js";

import "./style.scss";
import "./components/promo.scss";

function App() {
  return (
    <div className="App">
      <div className="default-layout">
        <section className="promo">
          <h1 className="promo__title hidden">Промо-каталог</h1>
          <h2 className="promo__slogan">Ты сегодня покормил кота?</h2>
          <PromoList />
        </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
