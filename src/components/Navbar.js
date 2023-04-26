export default function Navbar() {
    return (
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
    )
}