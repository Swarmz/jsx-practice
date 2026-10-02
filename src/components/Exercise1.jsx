import { users } from "../data/data.js";

const listItems = users.map((user) => {
  return (
    <li key={user.id}>
      {user.name}
      {user.age >= 18 && "（成人）"}
    </li>
  );
});

const Exercise1 = () => {
  return <ul>{listItems}</ul>;
};

export default Exercise1;
