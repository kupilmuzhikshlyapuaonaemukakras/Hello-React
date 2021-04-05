import { MenuButton } from "../Navigation"
import "./Menu.css"

export default function MenuBar(menuButtons : MenuButton[]) {
  return (
    <div className="Menu">
        <ul>
        {menuButtons.map((menuButton : MenuButton) =>
         <li><a href={menuButton.ref}>{menuButton.title}</a></li>
        )}
        </ul>
    </div>
  )
}