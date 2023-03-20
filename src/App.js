import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      const prevData = [...prevUserList];
      prevData.unshift({
        id: Math.random().toString(),
        name: userName,
        age: userAge,
      });
      return prevData;
    });
  };

  let content =
    usersList.length > 0 ? <UsersList users={usersList} /> : "Add new user.";

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
