
import { useContext } from "react";
import { CartContext } from "../store";



export default function Cart() {

    const [state, dispath] = useContext(CartContext)
    console.log(state)
    return (
        <div className="bg-light p-3">
            <table className="table align-middle">
                <tbody>
                    {state.cartList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <a>x</a>
                                </td>
                                <td>
                                    <img className="table-img" src={item.img} alt={item.title}></img>
                                </td>
                                <td>
                                    {item.title}
                                    <br />
                                    <small className="text-muted">NT$ {item.price}</small>
                                </td>
                                <td>
                                    <select className="form-select"></select>
                                </td>
                                <td className="text-end"> $NT {item.price * item.quantity}</td>
                            </tr>
                        )
                    })}





                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={5} className="text-end">
                            總金額 440
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
