import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  form: {
    justifyContent: "center",
  },
  button: {
    marginLeft: "1em",
    marginTop: "1.8em",
  },
  formSize: {
    justifyContent: "center",
  },
  border: {
    borderRadius: "2em",
  },
});

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className={classes.form}
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <Grid
          container
          direction="row"
          spacing={4}
          padding={"1em"}
          className={classes.formSize}
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              id="text"
              label="Required"
              type="text"
              fullWidth
              className={classes.border}
              placeholder="Enter your text"
              value={todo}
              ref={inputRef}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Grid>
          <div className={classes.button}>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <div className={classes.border}>
                <Button variant="contained" type="submit" size="large">
                  Go
                </Button>
              </div>
            </Grid>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default InputFeild;
