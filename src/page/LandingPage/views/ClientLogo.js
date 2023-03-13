import React, { useState } from "react";
import databiz from "../../../resources/client-databiz.svg";
import audiophile from "../../../resources/client-audiophile.svg";
import meet from "../../../resources/client-meet.svg";
import maker from "../../../resources/client-maker.svg";

export const ClientLogo = () => {
  const [clientList] = useState([
    {
      name: "databiz",
      src: databiz,
    },
    {
      name: "audiophile",
      src: audiophile,
    },
    {
      name: "meet",
      src: meet,
    },
    {
      name: "maker",
      src: maker,
    },
  ]);
  return (
    <div className="client-container">
      {clientList.map((item) => {
        return <img key={item.name} src={item.src} alt={item.name} className="client-logo"/>;
      })}
    </div>
  );
};
