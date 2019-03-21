import React, { Component } from "react";
import { PromoListProvider } from "./context";
import PromoList from "./PromoList.js";
import "./promo.scss";

const tiles = [
  {
    id: "id-1",
    type: "фуа-гра",
    qty: 10,
    giftQty: "",
    giftText: "мышь в подарок",
    success: "",
    weight: "0,5",
    description: "Печень утки разварная с артишоками.",
    ordered: false,
    hover: false,
    disabled: false
  },
  {
    id: "id-2",
    type: "рыбой",
    qty: 40,
    giftQty: "2",
    giftText: "мыши в подарок",
    success: "",
    weight: "2",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    ordered: true,
    hover: true,
    disabled: false
  },
  {
    id: "id-3",
    type: "курой",
    qty: 100,
    giftQty: "5",
    giftText: "мышей в подарок",
    success: "заказчик доволен",
    weight: "5",
    description: "Филе из цыплят с трюфелями в бульоне.",
    ordered: false,
    hover: false,
    disabled: true
  }
];

export default class ProductTile extends Component {
  state = {
    tiles
  };

  toggleOrder = (tile, el) => event => {
    event.stopPropagation();
    const { tiles } = this.state;
    const tilesNew = tiles.map(item => {
      if (tile.id === item.id && !item.disabled) {
        if (el === "product_tile") {
          return {
            ...item,
            ordered: !item.ordered,
            hover: false
          };
        } else {
          return {
            ...item,
            ordered: true,
            hover: true
          };
        }
      }
      return item;
    });
    this.setState({ tiles: tilesNew });
  };

  hoverOrder = tile => event => {
    const { tiles } = this.state;
    const tilesNew = tiles.map(item => {
      if (
        tile.id === item.id &&
        !item.disabled &&
        item.ordered &&
        !item.hover
      ) {
        return {
          ...item,
          hover: true
        };
      }
      return item;
    });
    this.setState({ tiles: tilesNew });
  };

  render() {
    const { toggleOrder, hoverOrder, toggleStateOrder } = this;
    const { tiles } = this.state;

    return (
      <ul className="promo__list">
        <PromoListProvider
          value={{ toggleOrder, hoverOrder, toggleStateOrder }}
        >
          <PromoList tiles={tiles} />
        </PromoListProvider>
      </ul>
    );
  }
}
