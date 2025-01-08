import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderShop from '../../components/shop/HeaderShop'

export default function ShopLayout() {
    return (
        <div className="flex flex-col items-center w-full">
            <HeaderShop />
            <Outlet />
        </div>
    )
}
