import { useState } from "react";
import PrimaryNav from "./PrimaryNav";
import Topnav from "./Topnav";
import SecondaryNav from "./SecondaryNav";
import SecondarytopNav from "./SecondarytopNav";

const Navbar = () => {
  const [secondaryNav, setSecondaryNav] = useState(false);
  return (
    <>
      <Topnav />
      <PrimaryNav setSecondaryNav={setSecondaryNav} />
      {secondaryNav && (
        <SecondaryNav
          setSecondaryNav={setSecondaryNav}
          secondaryNav={secondaryNav}
        />
      )}
      <SecondarytopNav />
    </>
  );
};

export default Navbar;
