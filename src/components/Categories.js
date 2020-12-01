import { useState } from "react";

const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? "active" : ""}
        >
          All
        </li>
        {items.map((item, i) => (
          <li
            className={activeItem === i ? "active" : ""}
            onClick={() => onSelectItem(i)}
            key={`${item}_${i}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
