import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-6 py-1 m-3 border rounded-lg bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
