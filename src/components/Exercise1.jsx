import { users } from "../data/data.js";

const listItems = users.map((user) => {
  return (
    <li key={user.id}>{user.age >= 20 ? user.name + "（成人）" : user.name}</li>
  );
});

const Exercise1 = () => {
  return <ul>{listItems}</ul>;
};

export default Exercise1;
