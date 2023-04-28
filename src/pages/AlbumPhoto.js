
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const api = 'https://api.unsplash.com/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS

export default function AlbumPhoto() {
    // console.log(useParams);
    

    const { id } = useParams()
    // console.log(id)
    const [photo, setPhoto] = useState({})

    const navigate = useNavigate()

    useEffect(() => { return () => {
            (async () => {
                const res = await axios.get(`${api}/${id}?client_id=${accessId}`)
                // console.log(res)
                setPhoto(res.data)
            })()
        };
    }, [id]);
    return (
        <>
            <button type="button" className="btn" onClick={() => {
                navigate(-1)
            }}>回到上一頁</button>
            <p>{photo.description}</p>
            <img src={photo?.urls?.small} alt={photo.description} className="img-fluid"></img>
        </>
    )
}