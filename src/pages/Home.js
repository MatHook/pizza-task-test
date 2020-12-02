import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components/index";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = ["Meat", "Vegan", "Grill", "Spicy", "Closed"];
const sortNames = [
  { name: "popularity", type: "popular" },
  { name: "price", type: "price" },
  { name: "A to Z", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      dispatch(fetchPizzas("http://localhost:3001/pizzas"));
    }
    if (process.env.NODE_ENV === "production") {
      dispatch(fetchPizzas("https://pizzashoptest.netlify.app/pizzas.json"));
    }
    // eslint-disable-next-line
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortNames} />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
