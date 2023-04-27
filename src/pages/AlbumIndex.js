
import { useOutletContext } from "react-router-dom"


export default function AlbumIndex() {

    const list = useOutletContext()
    console.log(list);


    return (
        <div>這是相簿首頁</div>
    )
}