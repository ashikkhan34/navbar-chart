import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Link from "./Link";
import { useState } from "react";

const Navbar = () => {

    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
      ];
      
    return (
        <nav>
        <div onClick={() => setOpen(!open)}>
            {
                open === true ? <RxCross1 className="text-2xl"></RxCross1>: <FiMenu className="text-2xl md:hidden"></FiMenu>
            }
        
        </div>

          <ul className={` bg-blue-800 duration-1000 md:static text-black font-bold md:flex absolute
          ${open ? "top-7 ml-4 " : "-top-32"}
            `}>
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;