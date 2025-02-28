import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="fs-3">{`${name}, your current entry count is...`}</div>
      <div className="fs-1 fw-bold">{entries}</div>
    </div>
  );
};

export default Rank;
