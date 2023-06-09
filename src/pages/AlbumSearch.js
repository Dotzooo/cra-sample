import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom'

import axios from "axios";


const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS

export default function AlbumSearch() {

    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // console.log(searchParams.get('query')) // 取出
        // setSearchParams({ query: 'animal'   })  // 寫入
        setSearch(searchParams.get('query'))
    }, [searchParams])



    useEffect(() => {
        if (search !== '') {
        (async () => {
            const res = await axios.get(`${api}?client_id=${accessId}&query=${search}`)
            const { results } = res.data
            setList(results)
        })()}
    }, [search]);


    return (
        <div>
            這是搜尋頁面 { search}
            <input type="text" className="form-control"
                defaultValue={search}
                onKeyUp={(e) => {
                    if (e.code === 'Enter') {
                        // setSearch(e.target.value)
                        setSearchParams({query: e.target.value})
                    }
                }}
            ></input>
            {list.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/album/${item.id}`}>{item.alt_description}</Link>
                    </li>)
                })}
        </div>
    )
}