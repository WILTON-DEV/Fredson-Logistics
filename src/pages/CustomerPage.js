import React from "react";
import CustomerComponent1 from "../components/CustomerComponent1";
import Head from "../components/Head";
import HomeComponent1 from "../components/HomeComponent1";
import HomeComponent7 from "../components/HomeComponent7";

function CustomerPage() {
  return (
    <div>
      <Head />
      <CustomerComponent1 />
      <HomeComponent7 />
    </div>
  );
}

export default CustomerPage;
