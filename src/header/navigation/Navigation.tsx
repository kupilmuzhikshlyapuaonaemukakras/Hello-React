import React from "react"
import MenuBar from "./menu/Menu"
import "./Navigation.css"
import { ReactNode } from "react"

export type MenuButton = {
    id: number;
    title: string;
    ref: string;
    icon: ReactNode;
}

const menuButtons: Array<MenuButton> = [{id: 1, title: 'Home', ref: "/", icon: '#'},
                                   {id: 2, title: 'Dungeon', ref: "/dungeon", icon: '#'},
                                   {id: 3, title: 'Important', ref: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", icon: '#'}]

export default function Navigation() {
  return (
    <nav className="Navigation">
        <MenuBar menuButtons={menuButtons}/>
    </nav>
  );
}