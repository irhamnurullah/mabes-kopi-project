import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";

const NavBar = () => {
  return (
    <div className="sticky  top-0 bg-neutral-20 text-primary-60 text-base backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="container mx-auto pl-14 py-10">
        <div className="flex justify-between">
          <div>
            <Link to="/about">
              <img src={Logo} alt="Brand" />
            </Link>
          </div>
          <div className="sm:hidden lg:flex lg:space-x-16 ">
            <NavLink
              activeClassName="text-primary-80 font-semibold"
              to="/home"
              className="flex space-x-2 hover:text-primary-80"
            >
              <svg
                className="mt-1"
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.0001 16V11H12.0001V16C12.0001 16.55 12.4501 17 13.0001 17H16.0001C16.5501 17 17.0001 16.55 17.0001 16V9H18.7001C19.1601 9 19.3801 8.43 19.0301 8.13L10.6701 0.600001C10.2901 0.260001 9.7101 0.260001 9.3301 0.600001L0.970098 8.13C0.630098 8.43 0.840098 9 1.3001 9H3.0001V16C3.0001 16.55 3.4501 17 4.0001 17H7.0001C7.5501 17 8.0001 16.55 8.0001 16Z" />
              </svg>
              <span>Home</span>
            </NavLink>
            <NavLink
              activeClassName="text-primary-80 font-semibold"
              to="/menu"
              className="flex space-x-2 hover:text-primary-80"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.9 5H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V5H12.1C11.51 5 11.05 5.51 11.1 6.1L11.22 7.31C14.9 8.16 18 10.77 18 15L18.02 23H19.72C20.56 23 21.25 22.35 21.35 21.53L22.89 6.1C22.95 5.51 22.49 5 21.9 5ZM15 21H2C1.45 21 1 21.45 1 22C1 22.55 1.45 23 2 23H15C15.55 23 16 22.55 16 22C16 21.45 15.55 21 15 21ZM2.1 15H14.9C15.52 15 16.01 14.44 15.89 13.84C15.24 10.61 11.87 8.99 8.5 8.99C5.13 8.99 1.77 10.61 1.11 13.84C0.99 14.44 1.49 15 2.1 15ZM15 17H2C1.45 17 1 17.45 1 18C1 18.55 1.45 19 2 19H15C15.55 19 16 18.55 16 18C16 17.45 15.55 17 15 17Z" />
              </svg>
              <span>Menu</span>
            </NavLink>
            <NavLink
              activeClassName="text-primary-80 font-semibold"
              to="/contact"
              className="flex space-x-2 hover:text-primary-80"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0H5C4.45 0 4 0.45 4 1C4 1.55 4.45 2 5 2H19C19.55 2 20 1.55 20 1C20 0.45 19.55 0 19 0ZM5 24H19C19.55 24 20 23.55 20 23C20 22.45 19.55 22 19 22H5C4.45 22 4 22.45 4 23C4 23.55 4.45 24 5 24ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 6.75C13.24 6.75 14.25 7.76 14.25 9C14.25 10.24 13.24 11.25 12 11.25C10.76 11.25 9.75 10.24 9.75 9C9.75 7.76 10.76 6.75 12 6.75ZM17 17H7V15.5C7 13.83 10.33 13 12 13C13.67 13 17 13.83 17 15.5V17Z" />
              </svg>
              <span>Contact</span>
            </NavLink>
            <NavLink
              activeClassName="text-primary-80 font-semibold"
              to="/about"
              className="flex space-x-2 hover:text-primary-80"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" />
              </svg>
              <span>About</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
