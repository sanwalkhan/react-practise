import React, { useState } from "react";
import Data from "./data";

import { List } from "./list";

export const SlideBar = () => {
  const [persons, setpersons] = useState(Data);

  return (
    <div className="button">
      <button type="button" className="btn btn-success" onClick={() => setpersons(Data)}>Display</button>

      <button type="button" className="btn btn-danger" onClick={() => setpersons([])}> clear </button>

      <List persons={persons} />
    </div>
  );
};
