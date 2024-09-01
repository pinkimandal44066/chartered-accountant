import NavbarScrollingpage from "../navpagesfolder/NavbarScrollingPage";
import SideFrom from "../Homefolder/SideFrom";
import Home from "./Home";
import Homevideo from '../Homevideo';
const Homepage = () => {
  return (
    <div>
            <Homevideo />
      <NavbarScrollingpage />
      <Home />
      <SideFrom />
    </div>
  );
};

export default Homepage;
