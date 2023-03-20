import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import { useState } from "react";

function AddUser(props) {
  const [enteredUsermame, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsermame.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    
    if (+enteredAge < 1) return;

    console.log(enteredUsermame, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="usermame"
          type="text"
          value={enteredUsermame}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
