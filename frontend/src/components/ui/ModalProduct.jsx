import * as React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import NumbersIcon from '@mui/icons-material/Numbers'
import DateRangeIcon from '@mui/icons-material/DateRange'

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
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 74,
    py: 2,
    px: 4,
}

export default function ModalProduct({ item }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    console.log(item)
    return (
        <div>
            <Link
                onClick={handleOpen}
                to={''}
                className="bg-black text-sm outline-none text-center transition hover:bg-gray-800 p-2 rounded text-white w-[30%]"
            >
                Acerca de
            </Link>
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
                        <div className=" w-full h-[40vh] flex gap-2">
                            <img class src={item.imagen} alt="imagen" />
                            <div className="text-sm p-4 overflow-scroll ">
                                {item.description}
                            </div>
                        </div>
                        <div className="w-full  flex items-center text-sm">
                            <p className="p-2 text-gray-500 flex items-center gap-1">
                                <MonetizationOnIcon />{' '}
                                <span className="text-orange-400 underline">
                                    ${item.precio}
                                </span>
                            </p>

                            <p className="p-2 text-gray-500 flex items-center gap-1">
                                <AccountBalanceIcon />{' '}
                                <span className=" ">{item.centro}</span>
                            </p>

                            <p className="p-2 text-gray-500 flex items-center gap-1">
                                <NumbersIcon />{' '}
                                <span className=" ">
                                    {item.cantidad_producto} ejemplares
                                </span>
                            </p>

                            <p className="p-2 text-gray-500 flex items-center gap-1">
                                <DateRangeIcon />{' '}
                                <span className=" ">
                                    vence{' '}
                                    <span className="text-red-500">
                                        {item.fecha_vencimiento}
                                    </span>
                                </span>
                            </p>
                        </div>

                        <button className="mt-2 text-white py-2 rounded text-sm w-full bg-red-500/80 transition hover:bg-red-500/90">
                            <AddShoppingCartIcon /> Pedir
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
