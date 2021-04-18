import "./work.css"
import doomed_guy from "./doomed_guy.png"

export default function Work() {
    return (
        <>
        <img src={doomed_guy} className="Doomed_guy" alt="working_guy" />
        <h2 className="Question">Are you sure?</h2>
        </>
    );
}