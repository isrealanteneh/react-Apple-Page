import React, { useState } from "react";
// importing nav
import OriginNav from "./component/OriginNav";
// importing  OriginMain
import OriginMain from "./component/OriginMain";

// importing origin second
import OriginSecond from "./component/OriginSecond";

// importing OriginThird
import OriginThird from "./component/OriginThird";
// importing fotter
import Fotter from "./component/Fotter";

// app function component
const App = () => {
  return (
    <>
      <OriginNav />
      <OriginMain />
      <OriginSecond />
      <OriginThird />
      <Fotter />
    </>
  );
};

export default App;
