function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">購物網站</span>
          <button type="submit" className="btn btn-primary position-relative">
            購物車
            <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
              99
            </span>
          </button>
        </div>
      </nav>
      <div className="container mt-5">
        {/** */}
        <div className="row row-cols-3">
          <div className="col-md-7">
            <div className="col">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1682347546932-f397ccf63940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">
                    Card title
                    <span className="float-end">$250</span>
                  </h6>
                  <p className="card-text"></p>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100"
                  >
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
