import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        {/** */}
        <div className="row row-cols-3">
          <div className="col-md-7">
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
