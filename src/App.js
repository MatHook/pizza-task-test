import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pizzas.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact render={() => <Home items={pizzas} />} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
