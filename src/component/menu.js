/* eslint-disable eqeqeq */
import React, { useState } from "react";
import menu from "./newdata";
import { Buttons } from "./buttons";
import { Menucards } from "./menucards";

export const Menu = () => {
  const category = menu.map((value) => value.category);
  const setcategory = new Set(category);
  const setmenu = ["All", ...setcategory];

  // console.log(setmenu);
  // console.log(setcategory);
  // console.log(category);

  const [items, setitems] = useState(menu);
  function desireitems(choice) {
    if (choice == "All") {
      return setitems(menu);
    }

    const filter = menu.filter((item) => item.category == choice);
    setitems(filter);
    console.log(filter);
  }

  return (
    <div>
      <Buttons category={setmenu} fun={desireitems} />
      <div className="main">
        {" "}
        {items.map((i) => (
          <Menucards items={i} />
        ))}{" "}
      </div>
    </div>
  );
};
