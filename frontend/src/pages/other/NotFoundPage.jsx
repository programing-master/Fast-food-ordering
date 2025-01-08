import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div className="  h-screen w-full flex flex-col gap-4 justify-center items-center ">
            <img
                className="w-[20%]"
                src="./assets/busqueda.png"
                alt="search logo"
            />
            <p className="text-md flex border p-2 rounded justify-center items-center">
                No se ha Podido acceder a la ruta
              
            </p>
        </div>
    )
}
