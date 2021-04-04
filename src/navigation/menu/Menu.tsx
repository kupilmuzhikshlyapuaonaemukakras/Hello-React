import "./Menu.css"

export default function MenuBar(props : any) {
  return (
    <div className="Menu">
        <ul>
        {props.menuButtons.map((menuButton : any) =>
         <li><a href={menuButton.ref}>{menuButton.title}</a></li>
        )}
        </ul>
    </div>
  )
}