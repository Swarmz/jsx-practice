import { devices } from "../data/data.js";

function Device({ name, width, price }) {
  if (width >= 700) {
    if (price >= 1000) {
      return <li>{name}「💰 高級品」</li>;
    }
    return <li>{name}「🛒 お買い得」</li>;
  }
  return null;
}

const listItems = devices.map((device) => {
  return (
    <Device
      key={device.id}
      name={device.name}
      width={device.width}
      price={device.price}
    />
  );
});

const Exercise2 = () => {
  return <ul>{listItems}</ul>;
};

export default Exercise2;
