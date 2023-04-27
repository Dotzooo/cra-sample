import { Outlet, Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS
console.log(accessId)
export default function AlbumLayout() {

    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${api}?client_id=${accessId}&query=office`);
            const { results } = res.data;
            
            setList(results)
        })()
    }, [])


    return (
        <div className="row">
            <div className="col-4">
                左側選單
                <p>
                    <Link className="btn" to="search">搜尋頁面</Link>

                </p>

                {list.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.id}>{item.alt_description}</Link>
                    </li>)
                })}
            </div>
            <div className="col-8">
                主要呈現內容

                <Outlet context={list}></Outlet>
            </div>
        </div>
    )
}