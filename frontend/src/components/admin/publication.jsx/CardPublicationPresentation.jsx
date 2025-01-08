import React from 'react'
import AbcIcon from '@mui/icons-material/Abc'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import AboutProduct from '../../ui/AboutProduct'

export default function CardPublicationPresentation({ props }) {
    return (
        <div className="rounded img-animated  w-full shadow-md h-[50vh]">
            <div className="text-sm border-b min-h-[6vh] w-full p-2 text-gray-500 rounded-t flex justify-between">
                <span>
                    {props.nombre_producto} 
                </span>{' '}
                <div className=" flex items-center gap-2">
                    <button className="rounded-full flex items-center justify-center transition hover:bg-gray-100">
                        <DeleteIcon fontSize="small" />
                    </button>
                    <button className="rounded-full flex items-center justify-center transition hover:bg-gray-100">
                        <BorderColorIcon fontSize="small" />
                    </button>
                </div>
            </div>
            <div className=" w-full flex flex-col items-center h-[100%] ">
                <img
                    className="w-[95%] h-[60%]"
                    src={props.imagen}
                    alt={props.nombre}
                />
                <section className="min-h-[30%]  text-sm flex items-center  flex-col w-full ">
                    <div className="w-full p-2 flex items-center gap-2">
                        {' '}
                        <p className=" text-gray-500 flex items-center gap-2 pl-2 text-sm">
                            <span className="text-sm flex items-center">
                                {props.centro}
                            </span>
                        </p>
                        <p className="text-sm flex items-center text-gray-500">
                            <AttachMoneyIcon />
                            <span className="text-yellow-500 underline text-sm flex items-center">
                                {props.precio}.00
                            </span>
                        </p>
                        
                    </div>
                    <div className='w-full flex '>
                    <AboutProduct item={props}/>

                    </div>
                </section>
            </div>
        </div>
    )
}
