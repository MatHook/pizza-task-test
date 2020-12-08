import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ["Meat", "Vegan", "Grill", "Spicy", "Closed"];
const sortNames = [
  { name: "popularity", type: "popular", order: "desc" },
  { name: "price", type: "price", order: "desc" },
  { name: "A to Z", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const isDollar = useSelector(({ pizzas }) => pizzas.isDollar);
  const isLoggined = useSelector(({ user }) => user.isLoggined);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  let url = "";

  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3001";
  }

  if (process.env.NODE_ENV === "production") {
    url = "https://pizza-shop-task.herokuapp.com";
  }

  useEffect(() => {
    dispatch(fetchPizzas(url, sortBy, category));
    // eslint-disable-next-line
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line
  }, []);

  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(index));
    // eslint-disable-next-line
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortNames}
        />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                currency={isDollar}
                login={isLoggined}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
};

export default Home;
