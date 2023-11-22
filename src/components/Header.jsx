"use client";
import { slide as Menu } from "react-burger-menu";

function Header() {
  return (
    <header className="header">
      <Menu
        left
        customBurgerIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        }
      >
        <a href="#" className="menu-item">
          Home
        </a>
        <a href="#" className="menu-item">
          About
        </a>
        <a href="#" className="menu-item">
          Contact
        </a>
      </Menu>
    </header>
  );
}

export default Header;
