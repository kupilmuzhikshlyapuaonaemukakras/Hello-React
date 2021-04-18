import { MenuButton } from "../Navigation"
import "./Menu.css"

export default function MenuBar(props : any) {
  return (
    <div className="Menu">
        <ul>
        {props.menuButtons.map((button : MenuButton) =>
         <li><a href={button.ref}>{button.title}</a></li>
         )}
        </ul>
    </div>
  )
}