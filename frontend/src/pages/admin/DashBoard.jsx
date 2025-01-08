import React from 'react'
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert'
import PersonIcon from '@mui/icons-material/Person'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import TableUsers from '../../components/admin/TableUsers'
export default function DashBoard() {
    return (
        <div className="w-[50%]">
            <section className="w-[99%] grid gap-2 mt-1 grid-cols-2">
                <div className="w-[100%] border h-[25vh] shadow-md rounded">
                    <section className="flex overflow-none rounded-t items-center justify-between pr-8 bg-gradient bg-zinc-700">
                        <div className=" p-4 rounded text-white">
                            <CrisisAlertIcon />
                        </div>
                        <div className="flex py-2 flex-col  items-center">
                            <p className="font-thin text-white">Ventas</p>
                            <p className="font-bold text-2xl text-white ">
                                234
                            </p>
                        </div>
                    </section>
                    <div className="py-10 px-2">
                        <p className=" flex gap-1 items-center">
                            <span className="font-bold text-green-500">
                                +55%
                            </span>
                            <span className="font-thin text-gray-500 text-sm">
                                Desde la semana pasada
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-[100%] border h-[25vh] shadow-md rounded">
                    <section className="flex overflow-none rounded-t items-center justify-between pr-8 bg-blue-500">
                        <div className=" p-4 rounded text-white">
                            <PersonIcon />
                        </div>
                        <div className="flex py-2 flex-col  items-center">
                            <p className="font-thin text-white">Usuarios</p>
                            <p className="font-bold text-2xl text-white ">
                                2,300
                            </p>
                        </div>
                    </section>
                    <div className="py-10 px-2">
                        <p className=" flex gap-1 items-center">
                            <span className="font-bold text-green-500">
                                +3%
                            </span>
                            <span className="font-thin text-gray-500 text-sm ">
                                Desde el mes pasado
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-[100%] border h-[25vh] shadow-md rounded">
                    <section className="flex overflow-none rounded-t items-center justify-between pr-8 bg-green-500">
                        <div className=" p-4 rounded text-white">
                            <MonetizationOnIcon />
                        </div>
                        <div className="flex py-2 flex-col  items-center">
                            <p className="font-thin text-white">Bienes</p>
                            <p className="font-bold text-2xl text-white ">
                                200,300
                            </p>
                        </div>
                    </section>
                    <div className="py-10 px-2">
                        <p className=" flex gap-1 items-center">
                            <span className="font-bold text-green-500">
                                +1%
                            </span>
                            <span className="font-thin text-gray-500 text-sm ">
                                Desde ayer
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-[100%] border h-[25vh] rounded shadow-md">
                    <section className="flex overflow-none rounded-t items-center justify-between pr-8 bg-orange-500">
                        <div className=" p-4 rounded text-white">
                            <MonetizationOnIcon />
                        </div>
                        <div className="flex py-2 flex-col  items-center">
                            <p className="font-thin text-white">Seguidores</p>
                            <p className="font-bold text-2xl text-white ">
                                300
                            </p>
                        </div>
                    </section>
                    <div className="py-10 px-2">
                        <p className=" flex gap-1 items-center">
                            <span className="font-bold text-green-500">
                                +20%
                            </span>
                            <span className="font-thin text-gray-500 text-sm ">
                                Desde la semana pasada
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full mt-4 border rounded p-4">
                <TableUsers />
            </section>
        </div>
    )
}
