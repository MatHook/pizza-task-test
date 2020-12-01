import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
  const [pizzas, setPizzas] = useState([]);
  let url = ''

  if (process.env.NODE_ENV === "production") {
    url = ("https://pizzashoptest.netlify.app/pizzas.json")
  }

  if (process.env.NODE_ENV === "development") {
    url = ("http://localhost:3000/pizzas.json")
  }

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, [url]);

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
