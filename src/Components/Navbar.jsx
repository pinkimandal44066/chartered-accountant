import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.jpeg"
const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <div style={{ fontFamily: "Century Gothic" }} className="w-full ">
      <div style={{ position: "relative  " }}>
        <NavLink to="/">
          {/* <img
            src={logo}
            alt=""
            className="w-16 lg:w-24 rounded-xl lg:mt-4 lg:mx-24 md:mx-20  "
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              cursor: "pointer",
              zIndex: 1,
            }}
          /> */}


<img
  src={logo}
  alt=""
  className="w-16 lg:w-20 rounded-xl cursor-pointer absolute left-0 
  lg:top-2   lg:mt-4 lg:mx-24 md:mx-20  sm:mx-10  mx-5  z-10
  
       top-4 right-5 md:top-5    
            md:right-20 lg:right-32  sm:right-10 sm:top-4  "
/>

        </NavLink>
        {/* <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          style={{ position: "relative" }}
        >
          <source
            src="https://media.istockphoto.com/id/1849196332/video/close-up-hand-of-woman-using-calculator-for-calculate-checking-bills-taxes-bank-account.mp4?s=mp4-640x640-is&k=20&c=kjvK7YLFmJtCoPBfcvNyix9hqHlkWEOORTR26OlJZiQ="
            type="video/mp4"
          />
        </video> */}
      </div>

      {/* navbar */}
      <nav>
        <div className="container mx-auto flex justify-between items-center cursor-pointer  ">
          <div className="left flex items-center ">
            <div className="absolute lg:top-5 top-4 right-5 md:top-5    
            md:right-20 lg:right-32  sm:right-10 sm:top-4   p-2 bg-blue-600  text-white rounded-full">
              <FiMenu
                onClick={() => setMenu(true)}
                className="lg:text-4xl md:text-4xl text-4xl cursor-pointer"
              />
            </div>
          </div>

          {isSideMenuOpen && (
            <div className="fixed h-screen w-full z-[999] font-Poppins   cursor-pointer  bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
              <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-0 mb-8 text-5xl text-white rounded-full p-2
                   cursor-pointer bg-blue-600 absolute  
                 
                   
                   lg:top-5 top-4 right-5 md:top-5    
            md:right-20 lg:right-32  sm:right-10 sm:top-4 "
                />

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  HOME
                </NavLink>

                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  ABOUT US
                </NavLink>

                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Services
                </NavLink>

                {/* <NavLink
                  to="/enquiry"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Enquiry
                </NavLink> */}




                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `  ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    } font-light text-2xl`
                  }
                >
                  Contact US
                </NavLink>

                {/* icons  */}

                <div className="flex justify-center items-center lg:text-4xl text-3xl gap-10">
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>

                  <Link
                    to="https://www.instagram.com/accounts/login/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </Link>

                  <Link
                    to="https://www.youtube.com/channel/YourChannelID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoYoutube />
                  </Link>
                </div>
              </section>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
