import ProductsData from "../assets/productsData";

export default function Products() {
  return (
    <div className="row row-cols-3 g-3">
      {ProductsData.map((product) => {
        return (
          <div className="col" key={product.id}>
            <div className="card">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h6 className="card-title">
                  {product.title}
                  <span className="float-end">NT$ {product.price}</span>
                </h6>
                <p className="card-text"></p>
                <button type="button" className="btn btn-outline-primary w-100">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}