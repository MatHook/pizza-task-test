import { useEffect } from "react";
import { fetchPizzas } from "./redux/actions/pizzas";

import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
