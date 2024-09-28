import { Fragment, useState } from "react";
// import { MouseEvent } from "react"; for event handler

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {

  //Hook: function that allows us to use build in features in react
  //This Hook allows to to tell react that the data will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);




  //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>   removed because duplication is bad practice
  //       <p>No item found</p>
  //     </>
  //   );

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { setSelectedIndex(index);
            onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
