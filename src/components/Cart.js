import { useContext } from "react";
import { CartContext } from "../store";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  console.log(state);
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_CART",
                        payload: {
                          ...item,
                        },
                      })
                    }
                  >
                    x
                  </button>
                </td>
                <td>
                  <img
                    className="table-img"
                    src={item.img}
                    alt={item.title}
                  ></img>
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">NT$ {item.price}</small>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      const quantity = parseInt(e.target.value);

                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          ...item,
                          quantity,
                        },
                      });
                    }}
                  >
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="text-end"> $NT {item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額 {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
