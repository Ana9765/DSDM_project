import React, { createContext, useState } from "react";
import { getWine } from "./services/WineService.js";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  /* Functie pentru adaugare in cosul de cumparaturi*/
  const addWineToCart = async (id) => {
    const wine = getWine(id);
    setItems((prevItems) => {
      /* Verific daca vinul a mai fost adaugat in cos */
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        /* adaugam vinul in cos */
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            wine,
            totalPrice: wine.price,
          },
        ];
      } else {
        /* Adaugam la cantitatea vinului care e deja in cos */
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += wine.price;
          }
          return item;
        });
      }
    });
  };
  /* Numaram cate vinuri sunt in cos pentru a-l arata in dreptul cosului*/
  function getWineCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  /* Pretul comenzii */
  function getOrderPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, getWineCount, addWineToCart, getOrderPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
