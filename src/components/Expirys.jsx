import React from "react";

const Expirys = ({ type, date }) => {
  return (
    <div className="flex justify-between align-top">
      <div>
        <span>{type}</span>
      </div>

      <div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Expirys;
