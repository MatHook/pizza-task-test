import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components/index";
import { setCategory } from "../redux/actions/filters";

const categoryNames = ["Meat", "Vegan", "Grill", "Spicy", "Closed"];
const sortNames = [
  { name: "popularity", type: "popular" },
  { name: "price", type: "price" },
  { name: "A to Z", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortNames}
        />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
