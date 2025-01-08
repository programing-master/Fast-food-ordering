import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import DrawerBasic from './Drawer'
import AlertDialog from './AlertDialog'
import BasicModalCart from '../ui/BasicModalCart'
export default function Header() {
    const [megaMenu, setMegaMenu] = useState(false)

    return (
        <nav class="px-2 lg:px-8 shadow-md bg-white text-sm border-gray-200 dark:bg-gray-900">
            <div class="flex   items-center justify-around    p-4">
                <Link
                    to="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="./assets/empresario.png"
                        class="h-8"
                        alt="App Logo"
                    />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        CaFlow
                    </span>
                </Link>
                <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <AlertDialog />
                    <div className="flex md:hidden">
                        <DrawerBasic />
                    </div>
                </div>
                <div
                    id="mega-menu"
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                >
                    <ul class="flex   flex-col items-center justify-center mt-4 font-medium md:flex-row md:mt-0 md:space-x-4 rtl:space-x-reverse">
                        
                    <BasicModalCart />

                        <li>
                            <Link
                                to="/"
                                class="   flex items-center gap-2      text-gray-500 transition  hover:bg-gray-800 p-2 rounded     "
                                aria-current="page"
                            >
                                <HomeIcon />
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => setMegaMenu(!megaMenu)}
                                id="mega-menu-dropdown-button"
                                data-dropdown-toggle="mega-menu-dropdown"
                                class="flex items-center justify-between w-full py-2 px-3 font-medium   md:w-auto ho text-gray-500 transition  hover:bg-gray-800 p-4 rounded"
                            >
                                Compañía{' '}
                                <svg
                                    class="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {megaMenu ? (
                                <div
                                    id="mega-menu-dropdown"
                                    class="absolute z-10 grid  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 items-center"
                                >
                                    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul
                                            class="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button"
                                        >
                                            <li>
                                                <Link
                                                    to="/about"
                                                    class=" dark:text-gray-400 text-gray-500 transition  hover:bg-gray-600 p-2 rounded"
                                                >
                                                    Sobre nosotros
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class=" p-4 pb-0 text-gray-900 md:pb-4 dark:text-white ">
                                        <ul
                                            class="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button"
                                        >
                                            <li>
                                                <Link
                                                    to="/profile"
                                                    class="text-gray-500 dark:text-gray-400 transition  hover:bg-gray-600 p-2 rounded"
                                                >
                                                    Perfil
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class=" p-4 pb-0 text-gray-900 md:pb-4 dark:text-white ">
                                        <ul
                                            class="space-y-4"
                                            aria-labelledby="mega-menu-dropdown-button"
                                        >
                                            <li>
                                                <Link
                                                    to="/shop"
                                                    class="text-gray-500 dark:text-gray-400 transition  hover:bg-gray-600 p-2 rounded"
                                                >
                                                    Tienda
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                class=" py-2 px-3 flex items-center gap-2  border-gray-100  text-gray-500  transition  hover:bg-gray-800 p-4 rounded"
                                aria-current="page"
                            >
                                <SupervisorAccountIcon />
                                Admin
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}
