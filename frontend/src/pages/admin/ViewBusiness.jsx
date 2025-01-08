import React from 'react'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'

import ScrollToTopFab from '../../components/ui/ScrollTopToFab'
import { business } from '../../utils/business'
import CardBusinessPresentation from '../../components/admin/business/CardBusinessPresentation'
export default function ViewBusiness() {
    return (
        <div className="w-[50%] shadow-lg min-h-[30vh] flex flex-col items-center">
            <div className="w-full bg-zinc-800 text-gray-500 p-2 rounded-t">
                Mis Negocios
            </div>
            <form className="border mt-2 w-[95%] rounded  pb-4 flex flex-col items-center">
                <label className="text-sm w-full font-thin flex items-center justify-between p-2 px-4">
                    <span>Busca por Tipo</span>
                    <select className="w-[70%] p-1 rounded" name="" id="">
                        <option value="Productora">Produtora</option>
                        <option value="Comercializadora">
                            Comercializadora
                        </option>
                    </select>
                </label>

                <div className="w-full mt-2 px-4">
                    <button className="py-1 flex items-center justify-center gap-2 bg-gray-800 transition w-[30%] hover:bg-gray-900 text-white  rounded">
                        <ContentPasteSearchIcon />
                        Buscar
                    </button>
                </div>
            </form>
            <section className="w-full grid grid-cols-2 gap-8 rounded min-h-[60vh] p-4 ">
                {business.map((props, index) => (
                    <CardBusinessPresentation key={index} props={props} />
                ))}
            </section>
            <ScrollToTopFab />
        </div>
    )
}
