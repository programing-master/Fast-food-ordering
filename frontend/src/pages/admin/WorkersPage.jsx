import React, { useState } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Link } from 'react-router-dom'

export default function WorkersPage() {
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setSelectedImage(e.target.result)
            }
            reader.readAsDataURL(event.target.files[0])
        }
    }
    return (
        <div className="w-[50%]">
            <section className="w-[99%] shadow-md min-h-[30vh] rounded">
                <h3 className=" p-2 bg-zinc-800 rounded-t text-gray-500">
                    Crea un nuevo Trabajador
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
                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-center">
                            <span className="text-sm">Apellidos</span>
                            <input
                                type="text"
                                className="p-2 w-[90%] text-sm rounded border h-8 "
                                placeholder="Apellidos"
                            />
                        </label>

                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-center">
                            <span className="text-sm">Teléfono</span>
                            <input
                                type="number"
                                className="p-2 w-[90%] text-sm rounded border h-8 "
                                placeholder="Móvil"
                            />
                        </label>
                        <label className="flex px-2 w-[100%] justify-between  gap-2 items-center">
                            <span className="text-sm">Tipo</span>
                            <select className="w-[90%] px-2 text-sm rounded border h-8 ">
                                <option value="Domiciliario">
                                    Domiciliario
                                </option>
                                <option value="Almacenero">Almacenero</option>
                            </select>
                        </label>
                        <label className="flex px-2 w-[100%] justify-between  gap-2 items-center">
                            <span className="text-sm">Centro</span>
                            <select className="w-[90%] px-2 text-sm rounded border h-8 ">
                                <option value="Domiciliario">Centro 1</option>
                                <option value="Almacenero">Centro 2</option>
                            </select>
                        </label>
                        <label className="flex px-2 w-[100%] justify-between  gap-2 items-center">
                            <span className="text-sm">Raza</span>
                            <select className="w-[90%] px-2 text-sm rounded border h-8 ">
                                <option value="Blanca">Blanca</option>
                                <option value="Negra">Negra</option>
                                <option value="Mestiza">Mestiza</option>

                            </select>
                        </label>
                        <label className="flex px-2 justify-between w-[100%]  gap-2 items-center">
                            <span className="text-sm">
                                Dirección Particular
                            </span>
                            <input
                                type="text"
                                className="p-2 w-[90%] text-sm rounded border h-8 "
                                placeholder="Dirección"
                            />
                        </label>
                        <div className="w-full flex ">
                            <label className="px-2 flex justify-start gap-[4.5%] w-[100%]  items-center">
                                <span className="text-sm">Edad</span>
                                <input
                                    min="0"
                                    max="80"
                                    type="number"
                                    className="p-2 text-sm rounded border h-8 "
                                    placeholder="Edad"
                                />
                            </label>
                            <label className="flex px-2 justify-between w-[100%]  gap-2 items-center">
                                <span className="text-sm">Salario</span>
                                <input
                                    type="number"
                                    className="p-2 w-[90%] text-sm rounded border h-8 "
                                    placeholder="Salario Mensual"
                                />
                            </label>
                        </div>

                        <label className="flex px-2 min-h-12 justify-between w-[100%] gap-2 items-center">
                            <span className="text-sm">Imagen</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-[90%] rounded border h-10 text-sm"
                            />
                        </label>

                        {selectedImage ? (
                            <img
                                src={selectedImage ? selectedImage : <></>}
                                alt="Imagen seleccionada"
                                className="w-full h-[40vh] border object-cover"
                            />
                        ) : (
                            <div className="w-full h-[40vh] border flex items-center justify-center">
                                <p className="text-gray-400">
                                    Seleccione una imagen
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="w-full mt-4 flex">
                        <button
                            type="button"
                            class="py-2.5 px-8 flex items-center gap-2 text-white me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            <GroupAddIcon />
                            Guardar
                        </button>
                        <Link
                            to="/dashboard/add-worker/view-worker"
                            type="button"
                            class="py-2.5 px-5  me-2 mb-2 text-sm font-medium  focus:outline-none bg-white  rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 transition dark:focus:ring-gray-700  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
                        >
                            Ver todos los trabajadores
                        </Link>
                    </div>
                </form>
            </section>
            <section></section>
        </div>
    )
}
