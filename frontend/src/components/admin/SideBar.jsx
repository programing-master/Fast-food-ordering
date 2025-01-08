import React from 'react'
import { Link } from 'react-router-dom'
import BusinessIcon from '@mui/icons-material/Business'
import EngineeringIcon from '@mui/icons-material/Engineering'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ClearIcon from '@mui/icons-material/Clear'
import CategoryIcon from '@mui/icons-material/Category'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
export default function SideBar() {
    return (
        <div className="w-[20%] bg-zinc-800 border-2 h-[90vh] rounded py-2 flex flex-col items-center">
            <div className="w-full bg-zinc-800  h-[90vh] rounded py-2 flex flex-col items-center">
                <Link
                    to="/dashboard"
                    className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1"
                >
                    <AdminPanelSettingsIcon /> DashBoard
                </Link>
                <Link to="/dashboard/add-worker" className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1">
                    <EngineeringIcon /> Trabajadores
                </Link>
                <Link to="/dashboard/business" className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1">
                    <BusinessIcon /> Negocios
                </Link>
                <Link to="/dashboard/publication" className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1">
                    <PostAddIcon /> Publicaciones
                </Link>
                <Link to="/dashboard/save-room" className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1">
                    <WarehouseIcon /> Almacén
                </Link>
                <Link to="/dashboard/categories" className=" bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1">
                    <CategoryIcon /> Categorias
                </Link>
            </div>
            <Link
                to="/"
                className="border border-zinc-700 bg-transparent transition w-[90%] text-center p-2 rounded hover:bg-zinc-700 text-zinc-500 flex justify-center items-center gap-1"
            >
                <ClearIcon /> Salir
            </Link>
        </div>
    )
}
