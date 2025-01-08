import React from 'react'
import AbcIcon from '@mui/icons-material/Abc'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import RoomIcon from '@mui/icons-material/Room'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
export default function CardBusinessPresentation({ props }) {
    return (
        <div className="rounded img-animated  w-full shadow-md h-[30vh]">
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
                <section className="min-h-[30%]  text-sm flex items-center  flex-col w-full ">
                    <div className="w-full p-4 flex flex-col justify-start  gap-2">
                        {' '}
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <CalendarMonthIcon />
                            <span className="text-sm flex items-center">
                                {props.fecha}
                            </span>
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="text-sm flex items-center">
                                {props.descripcion}
                            </span>
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <RoomIcon />
                            <span className="text-sm flex items-center">
                                {props.direccion}
                            </span>
                        </p>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}
