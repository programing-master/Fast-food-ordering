import React from 'react'
import AbcIcon from '@mui/icons-material/Abc'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'

export default function CardWorkerPresentation({ props }) {
    return (
        <div className="rounded img-animated pb-2 w-full shadow-md h-[50vh]">
            <div className="text-sm border-b min-h-[6vh] w-full p-2 text-gray-500 rounded-t flex justify-between">
                <span>
                    {props.nombre} {props.apellidos}
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
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <AbcIcon />
                            <span className="text-sm flex items-center">
                                {props.tipo}
                            </span>
                        </p>
                        <p className="text-sm flex items-center text-gray-500">
                            <AttachMoneyIcon />
                            <span className="text-sm flex items-center">
                                {props.salario}
                            </span>
                        </p>
                    </div>
                    <button className="flex justify-center items-center gap-1 bg-red-500/90 text-white rounded w-[90%] py-1 transition hover:bg-red-500">
                        <AddToQueueIcon/>Ver mas
                    </button>
                </section>
            </div>
        </div>
    )
}
