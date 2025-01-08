import React, { useState } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import { Link } from 'react-router-dom'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
export default function BusinessPage() {
 
    return (
        <div className="w-[50%]">
            <section className="w-[99%] shadow-md min-h-[30vh] rounded">
                <h3 className=" p-2 bg-zinc-800 rounded-t text-gray-500">
                    Crea un nuevo Negocio
                </h3>
                <form className="border w-full flex flex-col gap-2 p-2 text-sm font-thin">
                    <div className="w-full flex flex-col  gap-4">
                        <label className="flex px-2 text-sm justify-between w-[100%] gap-2 items-center">
                            <span className="text-sm">Nombre</span>
                            <input
                                type="text"
                                className="p-2 w-[90%] rounded border h-8 text-sm"
                                placeholder="Nombre"
                            />
                        </label>
                       

                        
                        <label className="flex px-2 w-[100%] justify-between  gap-2 items-center">
                            <span className="text-sm">Tipo</span>
                            <select className="w-[90%] px-2 text-sm rounded border h-8 ">
                                <option value="Domiciliario">
                                    Productor
                                </option>
                                <option value="Almacenero">Comercializador</option>
                            </select>
                        </label>
                      
                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-center">
                            <span className="text-sm w-[30%]">
                                Dirección Particular
                            </span>
                            <input
                                type="text"
                                className="p-2 w-[90%] text-sm rounded border h-8 "
                                placeholder="Dirección"
                            />
                        </label>
                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-start">
                            <span className="text-sm w-[40%]">
                                Descripción del negocio
                            </span>
                            <textarea
                                type="text"
                                className="p-2 w-[90%]  text-sm rounded border h-[20vh] "
                                placeholder="Dirección"
                            />
                        </label>
                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-start">
                            <span className="text-sm w-[40%]">
                                Fecha de fundación 
                            </span>
                            <input
                                type="datetime-local"
                                className="p-2 w-[90%]  text-sm rounded border  "
                                placeholder="Dirección"
                            />
                        </label>

                       
                    </div>
                    <div className="w-full mt-4 flex">
                        <button
                            type="button"
                            class="py-2.5 px-8 flex items-center gap-2 text-white me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            <AddBusinessIcon />
                            Guardar
                        </button>
                        <Link
                            to="/dashboard/business/view-business"
                            type="button"
                            class="py-2.5 px-5  me-2 mb-2 text-sm font-medium  focus:outline-none bg-white  rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 transition dark:focus:ring-gray-700  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Administrar mis negocios
                        </Link>
                    </div>
                </form>
            </section>
            <section></section>
        </div>
    )
}
