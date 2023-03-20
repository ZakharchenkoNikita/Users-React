import Card from "../UI/Card";

import classes from "./UsersList.module.css";

function UserList(props) {
  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (props.users.length > 0) {
    content = (
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    );
  }

  return <Card className={classes.users}>{content}</Card>;
}

export default UserList;
