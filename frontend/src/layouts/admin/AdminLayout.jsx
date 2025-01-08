import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/admin/Header'
import SideBar from '../../components/admin/SideBar'
import RightBar from '../../components/admin/RightBar'

export default function AdminLayout() {
    return (
        <div className="w-full min-h-screen flex gap-1 flex-col items-center p-2">
            <Header />
            <div className='flex gap-1 w-full'>
                <SideBar />
                <Outlet />
                <RightBar />
            </div>
        </div>
    )
}
