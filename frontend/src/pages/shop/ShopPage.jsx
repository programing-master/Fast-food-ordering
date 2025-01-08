import React from 'react'
import { products } from '../../utils/products'
import CardShopProduct from '../../components/shop/CardShopProduct'
import ScrollToTopFab from '../../components/ui/ScrollTopToFab'

export default function ShopPage() {
    return (
      <main className="w-[96%]  mt-4 min-h-screen   mx-auto" >


       <div className="w-[96%]  mt-4 min-h-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto">
            {products.map((item, index) => (
                <CardShopProduct props={item} />
            ))}
               {products.map((item, index) => (
                <CardShopProduct props={item} />
            ))}
               {products.map((item, index) => (
                <CardShopProduct props={item} />
            ))}
            <ScrollToTopFab/>
        </div>
      </main>
       
    )
}
