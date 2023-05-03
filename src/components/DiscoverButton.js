import React from "react";

const DiscoverButton = ({ className, children, ...rest }) => {
  return (
    <button
      className={`flex items-center justify-center bg-cyan-950  hover:bg-red-900 text-white font-bold py-4 px-8 rounded-full w-[250px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DiscoverButton;
