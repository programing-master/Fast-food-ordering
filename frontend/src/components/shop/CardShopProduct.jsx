import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ModalProduct from '../ui/ModalProduct'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'

export default function CardShopProduct({ props }) {
    return (
        <div className="shadow-lg img-animated rounded border my-4  w-[93%] h-[63vh] flex flex-col justify-between items-center pt-2">
            <section className="w-[90%] flex gap-1 flex-col items-center h-[20vh]">
                <span className='text-sm w-full flex justify-start text-gray-500'>{props.centro}</span>
                <img
                    src={props.imagen}
                    className="object-fit w-[96%] aspect-square h-[36vh] rounded-t"
                    alt={props.nombre_producto}
                />
            </section>
            <div className="w-[98%] h-[33%] border rounded flex flex-col justify-between">
                <section className="w-full min-h-[20%] ">
                    <ul className="py-1 border-b-2  text-gray-400 w-full min-h-[30%] flex items-center justify-start pl-4">
                        <li className="w-[25%] transition hover:text-gray-500 flex items-center gap-1">
                            <FavoriteIcon />:{' '}
                            <span className="text-sm">123</span>
                        </li>
                        <li className="w-[13%] transition hover:text-gray-500 text-sm">
                            <CommentIcon />
                        </li>
                        <li className="w-[13%]  transition hover:text-gray-500 text-sm">
                            <ShareIcon />
                        </li>
                        <li className="w-[45%]   text-sm flex items-center gap-1">
                            <AccessAlarmsIcon />
                            <span>Hace 2 dias</span>
                        </li>
                    </ul>
                </section>
                <section className=" w-full min-h-[30%] pt-1 px-4 flex items-center gap-2">
                    <p className="font-thin flex text-sm items-center gap-2 text-gray-400">
                        <span className="font-semibold text-sm">Producto:</span>
                        {props.nombre_producto} 
                    </p>
                    <p className="font-thin flex items-center gap-2 text-gray-400 overflow-hidden">
                        <span className="font-semibold text-gray-400 ">
                            <MonetizationOnIcon />
                        </span>
                        <span className="text-sm text-yellow-400 text-md underline ">
                            ${props.precio}
                        </span>
                    </p>
                </section>

                <div className=" w-full min-h-[38%]">
                    <div className="w-full flex items-center  gap-2 px-2">
                        <button className="text-sm py-1.5  bg-red-500/80  outline-none transition hover:bg-red-500/90 rounded text-white w-[60%]">
                            <AddShoppingCartIcon /> Pedir
                        </button>
                        <ModalProduct item={props} />
                    </div>
                </div>
            </div>
        </div>
    )
}
