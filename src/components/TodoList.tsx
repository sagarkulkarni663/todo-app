import React, { useState } from "react";
import { Todo } from "../Model";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import SindleTodo from "./SindleTodo";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const useStyles = makeStyles({
  size: {
    height: "6em",
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  space: {
    paddingLeft: "3em",
  },
});

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  const classes = useStyles();
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => {
        <SindleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />;
        const handleEdit = (e: React.FormEvent, id: number) => {
          e.preventDefault();
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, todo: editTodo } : todo
            )
          );
          setEdit(false);
        };
        return (
          <form onSubmit={(e) => handleEdit(e, todo.id)}>
            <Paper className={classes.size} variant="outlined">
              <li key={todo.id}>{todo.todo}</li>
              {edit ? (
                <input
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
              ) : todo.isDone ? (
                <s>{todo.todo}</s>
              ) : (
                <span>{todo.todo}</span>
              )}
              <span
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit className={classes.space} />
              </span>

              <AiFillDelete
                className={classes.space}
                onClick={() => handleDelete(todo.id)}
              />
            </Paper>
          </form>
        );
      })}
    </div>
  );
};
export default TodoList;
