import React, { useState } from 'react'

import Header from '../common/Header'
export default function HeaderShop() {
    return (
        <div className=" w-full flex flex-col text-sm rounded bg-gray-900 border-gray-800 shadow-md  min-h-[7vh]  ">
            <Header />
            <form className="min-h-4  bg-white border-t border-t-gray-700 w-full flex flex-col items-start py-1  md:flex-row md:items-center justify-arund gap-1">
                <div className=" p-2 flex items-center gap-2">
                    <span className="font-semibold text-gray-500 text-sm">
                        Categorías
                    </span>
                    <select
                        className="rounded border border-gray-400 text-sm text-gray-500 px-1"
                        name=""
                        id=""
                    >
                        <option value="Pizzas" className="p-2 text-sm">
                            Pizzas
                        </option>
                        <option value="Pizzas" className="p-2 text-sm">
                            Pastas
                        </option>
                        <option value="Pizzas" className="p-2 text-sm">
                            Otros
                        </option>
                    </select>
                </div>
                <div className=" p-2 flex items-center gap-2">
                    <span className="font-semibold text-gray-500 text-sm">
                        Productos
                    </span>
                    <input
                        type="text"
                        placeholder="Productos"
                        className=" h-8 py-2 rounded border border-gray-400 text-sm text-gray-500 px-1"
                    />
                </div>
                <div className=" p-2 flex items-center gap-2">
                    <span className="font-semibold text-gray-500 text-sm">
                        Presupuesto
                    </span>
                    <input
                        type="number"
                        min={0}
                        className=" h-8 py-2 rounded border border-gray-400 text-sm text-gray-500 w-[15%]  px-1"
                    />
                    <input
                        type="number"
                        min={0}
                        className=" h-8 py-2 rounded border border-gray-400 text-sm text-gray-500 w-[15%] px-1"
                    />
                </div>
                <div className="flex p-2 items-center gap-2">
                    <span className="font-semibold text-gray-500 text-sm">
                        Centro
                    </span>
                    <input
                        type="text"
                        placeholder="Centros"
                        className=" h-8 py-2 rounded border border-gray-400 text-sm text-gray-500 px-1"
                    />
                </div>

                <button className="px-2 rounded w-full md:w-[5%]  font-semibold border border-gray-500 py-1  text-gray-500 transition-all hover:text-gray-700 hover:border-gray-700 text-sm ">
                    Buscar
                </button>
            </form>
        </div>
    )
}
