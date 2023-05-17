import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({to, children}) {

  const { navigate } = useContext(NavigationContext);

  const handleClick = (event)=>{
    event.preventDefault();
   navigate(to);
  };
  return (
    <a className="font-bold hover:font-bold hover:cursor-pointer hover:text-white" onClick={handleClick} href={to}>{children}
    </a>);
}

export default Link
