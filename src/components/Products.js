
import { useContext } from "react";
// import ProductsData from "../assets/productsData";
import { CartContext } from "../store";

export default function Products() {

    const [state, dispatch] = useContext(CartContext);

    return (
        <div className="row row-cols-3 g-3">
            {state.productList.map((product) => {
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
                                <select className="form-select" value={product.quantity} onChange={
                                    (e) => {
                                        const quantity = parseInt(e.target.value)

                                        console.log(quantity)
                                        dispatch({
                                            type: 'UPDATE_PRODUCT_QUANTITY',
                                            payload: {
                                                ...product,
                                                quantity
                                            }
                                        })
                                    }
                                }>
                                    {
                                        [...Array(20)].map((_, i) => {
                                            return (<option value={i + 1} key={i}>{i + 1}</option>)
                                        })
                                    }
                                </select>

                                <p className="card-text"></p>
                                <button type="button" className="btn btn-outline-primary w-100"
                                    onClick={() => {
                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: { ...product, quantity: 1 }
                                        })
                                    }}>
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
