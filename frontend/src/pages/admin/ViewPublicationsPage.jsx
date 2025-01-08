import React from 'react'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import CardWorkerPresentation from '../../components/admin/worker/CardWorkerPresentation'
import { workers } from '../../utils/workers'
import ScrollToTopFab from '../../components/ui/ScrollTopToFab'
import CardPublicationPresentation from '../../components/admin/publication.jsx/CardPublicationPresentation'
import { products } from '../../utils/products'
export default function ViewPublicationsPage() {
    return (
        <div className="w-[50%] shadow-lg min-h-[30vh] flex flex-col items-center">
            <div className="w-full bg-zinc-800 text-gray-500 p-2 rounded-t">
                Mis Trabajadores
            </div>
            <form className="border mt-2 w-[95%] rounded  pb-4 flex flex-col items-center">
                <label className="text-sm w-full font-thin flex items-center justify-between p-2 px-4">
                    <span>Busca por Negocio</span>
                    <select className="w-[70%] p-1 rounded" name="" id="">
                        <option value="Centro 1">Centro 1</option>
                        <option value="Centro 2">Centro 2</option>
                    </select>
                </label>
                <label className="text-sm w-full font-thin flex items-center justify-between p-2 px-4">
                    <span>Busca por Categoría</span>
                    <select className="w-[70%] p-1 rounded" name="" id="">
                        <option value="Centro 1">Domiciliario</option>
                        <option value="Centro 2">Almacenero</option>
                    </select>
                </label>
                <label className="text-sm w-full font-thin flex items-center justify-between p-2 px-4">
                    <span>Busca por Cantidades</span>
                    <input type="range"  min="0" className=" w-[70%] p-1 rounded"/>
                </label>
                <div className="w-full mt-2 px-4">
                 <button className="py-1 flex items-center justify-center gap-2 bg-gray-800 transition w-[30%] hover:bg-gray-900 text-white  rounded">
                        <ContentPasteSearchIcon />
                        Buscar
                    </button>
                </div>
            </form>
            <section className="w-full grid grid-cols-2 gap-8 rounded min-h-[60vh] p-4 ">
                {products.map((props, index) => (
                    <CardPublicationPresentation key={index} props={props} />
                ))}
            </section>
            <ScrollToTopFab />
        </div>
    )
}
