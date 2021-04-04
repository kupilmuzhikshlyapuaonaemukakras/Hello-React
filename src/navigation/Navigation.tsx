import React from "react"
import MenuBar from "./menu/Menu"
import "./Navigation.css"

interface MenuButton {
    id: number;
    title: string;
    ref: string;
    icon: any;
}

const menuButtons: MenuButton[] = [{id: 1, title: 'Home', ref: "/", icon: '#'},
                                   {id: 2, title: 'Work', ref: "/work", icon: '#'},
                                   {id: 3, title: 'Dungeon', ref: "/dungeon", icon: '#'},
                                   {id: 5, title: 'Important', ref: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", icon: '#'}]

export default function Navigation() {
  return (
    <nav className="Navigation">
        <MenuBar menuButtons={menuButtons}/>
    </nav>
  );
}