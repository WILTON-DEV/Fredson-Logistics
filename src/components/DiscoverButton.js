import React from "react";

const DiscoverButton = ({ className, children, ...rest }) => {
  return (
    <button
      className={`flex items-center justify-center bg-gradient-to-r  from-[#262a38] via-50% to-white from-50% border-2 border-white/30 hover:bg-[#be2117] text-white font-bold py-4 px-8 rounded-full w-[250px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DiscoverButton;
