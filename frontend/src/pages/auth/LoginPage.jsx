import React from 'react'
import { Link } from 'react-router-dom'
import LockOpenIcon from '@mui/icons-material/LockOpen';
export default function LoginPage() {
    return (
        <div className="box bg-gray-100/50 blur-1 rounded backdrop-blur-md  w-[90%] sm:w-[65%] lg:w-[35%]  shadow-xl min-h-[32vh]">
            <form className="w-full h-[100%] p-5  flex flex-col ">
                <h3 className="text-lg text-gray-600/80 pb-2 w-full border-b border-gray-350 ">
                    Iniciar Sesión
                </h3>
                <section className=" w-[100%] flex flex-col pt-4 gap-1 px-2">
                    
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-gray-500">Correo</span>
                        <input
                            required
                            type="Email"
                            className="text-gray-600 p-2 h-8 text-sm bg-gray-100/20 shadow rounded border-none outline-none "
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-gray-500">
                            Contraseña
                        </span>
                        <input
                            required
                            type="password"
                            className="h-8 text-sm p-2 bg-gray-100/20 shadow rounded border-none outline-none text-gray-600"
                        />
                    </label>
                    
                </section>
                <div className=" w-full mt-4 px-2 flex flex-col gap-1">
                    <button
                        type="submit"
                        className="h-10 w-full text-sm py-1 rounded bg-black  flex justify-center items-center gap-2 text-white transition hover:bg-gray-800"
                    >
                        Iniciar Sesión
                        <LockOpenIcon/>
                    </button>
                    <button
                        type="reset"
                        className="h-8 w-full text-sm py-1 rounded  flex justify-center bg-red-500/90 transition hover:bg-red-500/80 text-white"
                    >
                        Vaciar
                    </button>

                    <span className="text-sm mt-2 flex gap-1">
                        No tienes cuenta?
                        <Link to={"/register"} className="transition hover:text-red-500/90  ">
                            Regístrate aquí
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}
