"use client";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu, SubMenu, Item } from "burger-menu";
import { Divider } from "antd";
import "burger-menu/lib/index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <svg className="menu_btn" onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <Menu className="burger-menu" side="left" isOpen={isOpen} selectedKey={"entry"} onClose={() => setIsOpen(false)}>
        <Item itemKey={"hår"} text={"Hår"}></Item>
        <Item itemKey={"makeup"} text={"Makeup"}></Item>
        <SubMenu title="Hudpleje">
          <Item itemKey={"ansigt"} text={"Ansigtspleje"}></Item>
          <Item itemKey={"krop"} text={"Kropspleje"}></Item>
          <Item itemKey={"gave"} text={"Gaveæsker"}></Item>
        </SubMenu>
        <Divider style={{ height: 1 }} className="bg-matas-blue" />
        <Item icon={<img className="w-16 rounded" src="/img/oekologisk-hudpleje.jpg" alt="woman" />} itemKey={"quiz"} text={"Hudpleje: Tag testen"}>
          <p>hejsa</p>
        </Item>
      </Menu>
    </header>
  );
}

export default Header;
