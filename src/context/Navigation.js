import { createContext, useState, useEffect, useReducer } from "react";
import { CHART_STATUS, HOME, PAGE_STATUS } from "../constants/navigationStrings";
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.jpg';

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const GoodsDataApi = [
    {
      id: 0,
      name: "Boss Chair",
      price: "90.33$",
      image: Image2,
    },
    {
      id: 1,
      name: "Office Table",
      price: "60.33$",
      image: Image3,
    },
    {
      id: 2,
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      id: 3,
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
       {
      id: 4,
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
       {
      id: 5,
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
       {
      id: 6,
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
       {  id: 7,
      name: "Boss Chair",
      price: "90.33$",
      image: Image2,
    },
    {     id: 8,
      name: "Boss Chair",
      price: "90.33$",
      image: Image2,
    },
  ];
    const [goodsInChart, setGoodsInChart] = useState([]);
  
  const [currentPath, setCurrentPath] =useState(window.location.pathname);
    // const [active, setActive] =useState('Home');
    //  const [chart, setChart] =useState(false);
    //  const [chartArray, setChartArray] =useState(false);
     const reducer = (state, action)=>{
        switch (action.type) {
          case CHART_STATUS:
          return  {
              ...state,
              chart: !state.chart
            };
        
         case PAGE_STATUS:
          return  {
              ...state,
              active_page: action.payload
            };
        
          default: 
            return;
        }
     }

     const [state, dispatch] = useReducer(reducer,[
      {
      chartArray: false,
      chart: false,
      active_page: HOME
      }
      ]);
      console.log(state.active_page);
  useEffect(
    ()=>{
      const handler =()=>{
        setCurrentPath(window.location.pathname)
      };
      window.addEventListener('popstate', handler);
      return ()=>{
        window.removeEventListener('popstate', handler);
      };
    }, []
  );

  const navigate = (to)=>{
    window.history.pushState({}, '',to);
    setCurrentPath(to);
  };


  return (
    <NavigationContext.Provider value={{navigate, currentPath,  GoodsDataApi, goodsInChart, setGoodsInChart, dispatch, state}}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationProvider};
export default NavigationContext;
