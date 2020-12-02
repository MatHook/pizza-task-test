import { Route } from "react-router-dom";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

function App() {
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
