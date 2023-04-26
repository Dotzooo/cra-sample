export default function Products() {
    return (
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
    )
}