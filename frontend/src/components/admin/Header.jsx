import { Typography } from '@mui/material'
import React from 'react'
import BreadCrumbsBasic from '../ui/BreadCrumbsBasic'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ConstructionIcon from '@mui/icons-material/Construction'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="w-[99.5%] border rounded shadow h-8 flex  justify-between items-center p-8 px-10">
            <div className="flex  flex-col tet-gray-800">
                {' '}
                <Typography
                    variant="h6"
                    sx={{
                        color: 'rgba(0,23,83,.6)',
                    }}
                    element="h6"
                >
                    DashBoard
                </Typography>
                <BreadCrumbsBasic />
            </div>
            <div className="flex gap-4 items-center">
                <form>
                    <input
                        type="text"
                        placeholder="Busca para más"
                        className="border rounded border-gray-400"
                    />
                </form>
                <ul className="flex items-center gap-2">
                    <li>
                        <Link className="text-gray-500 transition hover:text-gray-700 ">
                            <AccountCircleIcon />
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-500 transition hover:text-gray-700">
                            <ConstructionIcon />
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-500 transition hover:text-gray-700">
                            <NotificationsIcon />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
