import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import InputFeild from "./components/InputFeild";

import { Todo } from "./Model";
import TodoList from "./components/TodoList";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    fontFamily: "Ralwey ",
    fontSize: "2em",
    backgroundColor: "lightblue",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <span>Todo App</span>
      </div>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </React.Fragment>
  );
};

export default App;
