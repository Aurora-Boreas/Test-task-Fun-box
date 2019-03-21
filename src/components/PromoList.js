import React from "react";
import ProductTile from "./ProductTile";

const List = ({ tiles }) =>
  tiles.map(tile => <ProductTile tile={tile} key={tile.id} />);

export default List;
