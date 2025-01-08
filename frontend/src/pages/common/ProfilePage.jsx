import { Avatar } from '@mui/material'
import React from 'react'

export default function ProfilePage() {
    return (
        <div className="h-screen w-full  gap-2 flex flex-col items-center justify-center">
            <Avatar
                size={20}
                
                sx={{
                    width: '10%',
                    height: '20%',
                }}
                alt="Remy Sharp"
                src="./users/brooke-cagle-oI3xAJga5HY-unsplash.jpg"
            />

            <div className=" shadow-md  w-[90%] md:w-[40%]  min-h-[10vh] border rounded p-10">
                <h2 className="font-semibold mb-2">Su Perfil</h2>
                <p className="text-sm">Nombre de Usuario: {'<Name>'}</p>
                <p className="text-sm">Correo: {'<Email>'}</p>
                <p className="text-sm">Roll: {'<Roll>'}</p>
                <p className="text-sm flex gap-2 items-center my-2 border p-2 rounded">
                    Descripcion: I ❤️ Shop
                    <button className="bg-gray-800/90 text-white rounded p-1  transition hover:bg-gray-800">
                        {' '}
                        Cambiar
                    </button>
                </p>

                <p className="text-sm pr-4">
                    Contraseña: {'<Contraseña>'}{' '}
                    <button className="bg-gray-800/90 text-white rounded p-1  transition hover:bg-gray-800">
                        {' '}
                        Cambiar
                    </button>
                </p>
                <button className="bg-red-500/80 transition hover:bg-red-500/90 text-white mt-4 p-1 rounded w-full">
                    Volver
                </button>
            </div>
        </div>
    )
}
