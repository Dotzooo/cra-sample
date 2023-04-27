import { Outlet } from "react-router-dom"

export default function AlbumLayout() {
    return (
        <div className="row">
            <div className="col-4">
                左側選單
            </div>
            <div className="col-8">
                主要呈現內容

                <Outlet></Outlet>
            </div>
        </div>
    )
}