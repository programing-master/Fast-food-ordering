import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-center bg-[url("./assets/luke-porter-ohBhECoxQoU-unsplash.jpg")] bg-cover '>
            <Outlet />
        </div>
    )
}
