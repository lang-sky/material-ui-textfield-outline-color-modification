import React from "react";
import ReactDOM from "react-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    },
    "& .MuiOutlinedInput-input": {
      color: "green"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "red"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple"
    },
    "& .MuiInputLabel-outlined": {
      color: "green"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "red"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "purple"
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <TextField
        className={classes.root}
        defaultValue="My Default Value"
        variant="outlined"
        label="My Label"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
