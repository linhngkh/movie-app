import React from "react";

const Input = () => {
  return (
    <div className=" w-full max-w-sm items-center space-x-2 flex">
      <input type="email" placeholder="Email" className="px-3 py-2 w-full" />
      <button type="submit" className="rounded-md">
        Search
      </button>
    </div>
  );
};

export default Input;
