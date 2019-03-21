import React from "react";
import { PromoListConsumer } from "./context";
import pure from "recompose/pure";

import "./product-tile.scss";

const ProductTile = ({ tile }) => {
  const {
    type,
    qty,
    giftQty,
    giftText,
    success,
    weight,
    description,
    ordered,
    hover,
    disabled
  } = tile;
  return (
    <PromoListConsumer>
      {({ toggleOrder, hoverOrder }) => (
        <li
          onClick={toggleOrder(tile, "product_tile")}
          onMouseLeave={hoverOrder(tile)}
          className={
            "product-tile" +
            [
              disabled && !ordered
                ? " product-tile--disabled"
                : " " + !disabled && ordered
                ? " product-tile--ordered"
                : "" + !disabled && !ordered
                ? " product-tile--default"
                : ""
            ]
          }
        >
          <span className="product-tile__pseudo-corner">
            <svg>
              <polyline
                className="product-tile__pseudo-line"
                points="2,71 2,44 44,2 71,2"
                strokeWidth="4"
              />
              <polygon fill="#ffffff" points="4,71 4,44 44,4 71,4" />
            </svg>
          </span>
          <article
            className={
              "product-tile__inner" +
              (disabled ? " product-tile__inner--disabled" : " ")
            }
          >
            <header
              className={
                "product-tile__header" +
                (hover ? " product-tile__header--apply-hover" : "")
              }
            >
              <p className="product-tile__header-text">
                Сказочное заморское яство
              </p>
              <p className="product-tile__question-text">Котэ не одобряет?</p>
              <div className="product-tile__title">
                <h3>Нямушка</h3>
                <span>c {type}</span>
              </div>
            </header>
            <div className="product-tile__description">
              <span>{qty}</span> порций
            </div>
            <div className="product-tile__gift">
              <span>{giftQty}</span> {giftText}
            </div>
            <div className="product-tile__success">{success}</div>
            <div className="product-tile__weight">
              {weight}
              <span> кг</span>
            </div>
          </article>
          <div className="product-tile__attachment">
            <p className="product-tile__attachment-item product-tile__attachment-item--default">
              Чего сидишь? Порадуй котэ,
              <button onClick={toggleOrder(tile, "button")}>купи</button>
            </p>
            <p className="product-tile__attachment-item product-tile__attachment-item--ordered">
              {description}
            </p>
            <p className="product-tile__attachment-item product-tile__attachment-item--disabled">
              Печалька, с {type} закончился.
            </p>
          </div>
        </li>
      )}
    </PromoListConsumer>
  );
};
export default pure(ProductTile);
