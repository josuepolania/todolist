import "./TodoItem.css";
import {CompleteIcon} from "./CompleteIcon"
import {DeleteIcon} from "./DeleteIcon"

function Todoitems(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p className={`TodoItem-P ${props.
        ompleted && "TodoItem-p--complete"}`}>
            {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    )
  }

  export { Todoitems };