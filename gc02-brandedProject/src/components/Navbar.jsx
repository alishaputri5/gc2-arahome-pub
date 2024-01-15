import { Icon } from "@iconify/react";
import {Link} from "react-router-dom"
import axios from "axios";

export default function Navbar() {
 

  return (
    <>
      <div className="flex justify-beetween z-10 gap-6 fixed p-6 w-full bg-stone-200">
        <h1 className="flex font-semibold text-3xl px-10 tracking-widest">
          ARAHOME
        </h1>

        <ul className="flex gap-8 px-10 ml-auto">
          <li>
            
            <Icon icon="la:cart-arrow-down" width="30" />
          </li>
          <Link to="/">
            <li>Home</li>
            </Link>
          <Link to="products">
            <li>Products</li>
          </Link>
         
          <li>Login</li>
        </ul>
      </div>
    </>
  );
}

//bg-stone-200
