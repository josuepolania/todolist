import "./TodoList";


function Todolist({ children}) {
    return (
        <ul className="TodoList">
            {children}
        </ul>
    );
  }

  export { Todolist };