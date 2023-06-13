import { useContext, useState } from "react";
import NavigationContext from "../context/Navigation";
import { PAGE_STATUS } from "../constants/navigationStrings";

function Link({ to, children }) {
  const { navigate, state, dispatch } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
    // setActive(children);
    dispatch({
      type: PAGE_STATUS,
      payload: children
    });
  };

  return (
    <div
      className={`flex items-center justify-center font-bold hover:font-bold hover:cursor-pointer hover:scale-125 h-full w-full hover:text-[#be2117] ${
        state.active_page === children ? "text-[#be2117]" : ""
      }`}
      onClick={handleClick}
      href={to}
    >
      {children}
    </div>
  );
}

export default Link;
