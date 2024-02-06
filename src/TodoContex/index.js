import React, { Children } from "react";

const TodoContex = React.createContext();

function TodoProvider() {
    return (
        <TodoContex.Provider>
            {Children}

        </TodoContex.Provider>
    );
}


export { TodoContex, TodoProvider };
