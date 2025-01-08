import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/cart/cartSlice'
import ModalProduct from '../ui/ModalProduct'



export default function ProductPublication({ item }) {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <Card
            sx={{
                width: '80%',
                Height: '20vh',
                boxShadow: '0 0 10px rgba(0,0,0,.5)',
            }}
            className="img-animated"
        >
            <div className="w-full h-[40vh]">
                <img
                    src={item.imagen}
                    className="w-full cover object-contain transition-all duration-300 hover:scale-125"
                    alt=""
                />
            </div>

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2vh',
                    alignItems: 'start',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.05)', // Color de fondo oscuro
                    backdropFilter: 'blur(10px)', // Efecto de bor de vidrio
                    WebkitBackdropFilter: 'blur(10px)', // Para compatibilidad con Safari
                    border: '1px solid rgba(255, 255, 255, 0.1)', // Borde delgado
                    width: '100%',
                    boxShadow: '0 4px 30px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: 'white',
                        fontSize: '1rem',
                        textShadow: '0 0 9px rgba(0,0,0,.9)',
                    }}
                >
                    {item.nombre_producto}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'white',
                        fontSize: '.9rem',
                        textShadow: '0 0 9px rgba(0,0,0,.9)',
                    }}
                >
                    $ {item.precio}{' '}
                </Typography>
                <div className="w-full flex items-center justify-between gap-2">
                    <button
                        onClick={() => dispatch(increment())}
                        className="text-sm py-2 bg-red-500/80  outline-none transition hover:bg-red-500/90 rounded text-white w-[70%]"
                    >
                       <AddShoppingCartIcon/> Agregar a la factura
                    </button>
                  <ModalProduct item={item}/>
                </div>
            </CardContent>
        </Card>
    )
}
