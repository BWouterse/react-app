import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
import { useState } from "react";

//let selectedIndex = -1; //in React we cannot in code just overwite this by saying selectedindex = index in an on click event

// const [selectedIndex, setSelectedIndex] = useState(-1);    this is not allowed to be here
interface ListGroupProps {
  list: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// const message = list.length=== 0 ? <p>no items found</p> : null

// const getMessage = () =>{
//   // return list.length=== 0 ? <p>no items found</p> : null
//   return list.length === 0 && <p>no items found</p> //it is a shorter way of writing the above, because if not null it wont even get to the && statement
// }

//event handler
const handleClick = (event: MouseEvent) => console.log(event);

function ListGroup({ list, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //you cannot have a Hook outside of the component, the component being this function
  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} //instead of having {list.length=== 0 ? <p>no items found</p> : null} we will make it a const and then parse it */}
      <ul className="list-group">
        {list.map((listItem, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(listItem);
            }}
            key={listItem}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
