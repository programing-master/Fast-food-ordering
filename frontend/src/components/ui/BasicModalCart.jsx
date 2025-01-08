import * as React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import TableBasicModal from './TableBasicModal'
import NoCrashIcon from '@mui/icons-material/NoCrash'
const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true)
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true)
            }
        },
    })

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    )
})

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    py: 2,
    px: 4,
}

export default function BasicModalCart() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <li>
                <button class="relative flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <Link
                        aria-current="page"
                        onClick={handleOpen}
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                        <AddShoppingCartIcon />
                        Carrito
                    </Link>
                </button>
            </li>

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="border w-full">
                            <TableBasicModal />
                        </div>
                        <p className="p-2">
                            Importe :{' '}
                            <span className="text-orange-400 underline">
                                ${300}
                            </span>
                        </p>
                        <button className="mt-2 text-white py-2 rounded text-sm w-full bg-red-500/90 transition hover:bg-red-500 flex items-center gap-2 justify-center">
                            <NoCrashIcon />
                            Encargar
                        </button>
                        <button
                            onClick={handleClose}
                            className="mt-2 bg-white text-black  hover:text-white transition hover:bg-black  py-2 rounded text-sm w-full border-2 border-black"
                        >
                            Salir
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
