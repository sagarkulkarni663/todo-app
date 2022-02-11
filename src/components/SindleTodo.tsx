import React from "react";
import { Todo } from "../Model";
// import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
// import Paper from "@mui/material/Paper";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const useStyles = makeStyles({
  size: {
    height: "6em",
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  main: {
    paddingTop: "5em",
  },
});

const SindleTodo = ({ todo, todos, setTodos }: Props) => {
  const classes = useStyles();

  return (
    <form>
      <div>
        <span>{todo.todo}</span>
      </div>
    </form>
  );
};
export default SindleTodo;
