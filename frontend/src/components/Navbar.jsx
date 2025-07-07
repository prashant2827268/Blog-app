import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-24 fixed top-0">
        <ul className=" bg-black text-white  h-full flex shadow-lg justify-end items-center px-7 gap-9 text-xl">
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="" to="/">
              Services
            </Link>
          </li>
          <li>
            <Link className="" to="/">
              Query
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
