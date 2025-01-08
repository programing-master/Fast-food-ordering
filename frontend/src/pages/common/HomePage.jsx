import React from 'react'
import CarouselComponent from '../../components/common/CarouselComponent'
import AreaCharts from '../../components/charts/AreaCharts'
import RatingBasic from '../../components/common/RatingBasic'
import { products } from '../../utils/products'
import ProductPublication from '../../components/common/ProductPublication'
import ScrollToTopFab from '../../components/ui/ScrollTopToFab'
import CardShopProduct from '../../components/shop/CardShopProduct'
export default function HomePage() {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row justify-between p-2 ">
            <aside className="pl-4 mx-auto bg-opacity-50 bg-white w-full md:w-[70%]  min-h-[80%] p-1 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center">
                {products.map((props, index) => (
                    <CardShopProduct key={index} props={props} />
                ))}
                 {products.map((props, index) => (
                    <CardShopProduct key={index} props={props} />
                ))}
            </aside>
            <section className=" flex  flex-col min-h-[80vh] w-full md:w-[29%] shadow bg-gray-700 text-gray-400  rounded">
                <section className="w-[100%] flex flex-col justify-center">
                    <div className="bg-gray-900 rounded  text-gray-400 p-2 text-sm">
                        Busca Negocios
                    </div>
                    <div className="flex justify-center">
                        <form className="border border-gray-600 shadow flex gap-2 items-center rounded w-[97%] mt-2">
                            <label className="flex justify-start items-center gap-2 p-2">
                                
                                <input
                                placeholder='Negocios...'
                                    type="text"
                                    className="h-8 bg-transparent  text-sm rounded"
                                />
                            </label>
                            <button
                                type="submit"
                                className="bg-red-500/90 text-sm transition hover:bg-red-500/80 h-8 px-2 rounded text-white"
                            >
                                Buscar
                            </button>
                            <button
                                type="reset"
                                className="bg-black transition text-sm hover:bg-gray-900/80 h-8 px-2 rounded text-white"
                            >
                                Borrar
                            </button>
                        </form>
                    </div>
                </section>
                <div className="bg-white">
                    <p className="w-full bg-gray-700 p-4 border-b border-b-gray-600">
                        {' '}
                        Comentarios
                    </p>

                    <CarouselComponent />
                    <AreaCharts />
                </div>
                <RatingBasic />
            </section>
            <ScrollToTopFab position="bottomRight" />
        </div>
    )
}
