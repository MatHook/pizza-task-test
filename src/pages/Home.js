import { Categories, SortPopup, PizzaBlock } from "../components/index";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={["Meat", "Vegan", "Grill", "Spicy", "Closed"]}
        />
        <SortPopup items={["popularity", "price", "A to Z"]} />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
