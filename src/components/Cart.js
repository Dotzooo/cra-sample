export default function Cart() {
    return (
        <div className="bg-light p-3">
            <tbody className="table align-middle">
                <tr>
                    <td>
                        <a>x</a>
                    </td>
                    <td>
                        <img
                            src="https://images.unsplash.com/photo-1682347546932-f397ccf63940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="table-img"
                        ></img>
                    </td>
                    <td>
                        商品
                        <br />
                        <small className="text-muted">NT$ 250</small>
                    </td>
                    <td>
                        <select className="form-select"></select>
                    </td>
                    <td>440</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5} className="text-end">
                        總金額 440
                    </td>
                </tr>
            </tfoot>
        </div>
    )
}