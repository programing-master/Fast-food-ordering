import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
                <button class="relative flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <Link
                        aria-current="page"
                        onClick={handleClickOpen}
                        class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                        <LogoutIcon />
                        Salir
                    </Link>
                </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Salir de Sesión  '}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        className="text-sm"
                        id="alert-dialog-description"
                    >
                        Desea Salir de Sesión?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="warning">
                        No
                    </Button>
                    <Link onClick={handleClose} to={'/login'} autoFocus>
                        <Button onClick={handleClose} color="warning">
                            Sí
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
