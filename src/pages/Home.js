import Head from "../components/Head";
import HomeComponent1 from "../components/HomeComponent1";
import HomeComponent2 from "../components/HomeComponent2";
import HomeComponent3 from "../components/HomeComponent3";
import HomeComponent4 from "../components/HomeComponent4";
import HomeComponent5 from "../components/HomeComponent5";
import HomeComponent6 from "../components/HomeComponent6";
import HomeComponent7 from "../components/HomeComponent7";
import Companies from "../components/Companies";
// import HeadScroll from '../components/HeadScroll';


function Home() {
    const companyDetails = [
    {
      name: "Freight Transit",
    },
    {
      name: "Freight Transit",
    },
    {
      name: "Freight Transit",
    },
       {
      name: "Freight Transit",
    },
       {
      name: "Freight Transit",
    },
       {
      name: "Freight Transit",
    },
  ];
  return (
    <div className="relativeg">
      <Head/>
      {/* <HeadScroll /> */}
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 /> 
      <HomeComponent5 />
      <HomeComponent6 />
      <div className=" flex ">{companyDetails.map(({name})=>(
        <Companies name={name} key={name}/> 
      ))}</div>
      <HomeComponent7 />
    
    </div>
  )
}

export default Home
