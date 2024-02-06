import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import { Todoitems } from './Todoitems';
import React from 'react';


const defaultTodos = [
  {text: "curso profesional de javaScript", completed: false },
  {text: "Tomar el curso python", completed: false },
  {text: "curso Git Y GitHub", completed: false },
  {text: "Programacion", completed: false },
];

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
//localStorage.removeItem("TODOS_V1");//


function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem
  (itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.
    tringify([initialValue]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.
    stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;

  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes
      (searchValue.toLocaleLowerCase());
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <Todolist>
        {searchTodos.map (todo => (
          <Todoitems 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.
            text)}
            onDelete={() => deleteTodo(todo.
              text)}
          />
        ))}
      </Todolist>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
