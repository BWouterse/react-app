import { Fragment } from "react/jsx-runtime";

let list = ["magnum", "lick", "stegel", "loid", "charmander"];

list = [];

function ListGroup() {

  return (
    <>
      <h1>hi</h1>
      {list.length=== 0 ? <p>no items found</p> : null}
      <ul className="list-group">
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
