import { memo } from "react";
import PropTypes from "prop-types";

const Categories = memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          All
        </li>
        {items.map((item, i) => (
          <li
            className={activeCategory === i ? "active" : ""}
            onClick={() => onClickCategory(i)}
            key={`${item}_${i}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
