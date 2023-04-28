import { useContext } from "react"

import { NavLink } from 'react-router-dom'


import { CartContext } from "../store"



export default function Navbar() {
    const [state, dispatch] = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">購物網站</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='album'>ALBUM</NavLink>
                        </li>
                        <li className="nav-item ml-auto">
                            <button type="submit" className="btn btn-primary position-relative">
                                購物車
                                <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
                                    {state.cartList.length}
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}