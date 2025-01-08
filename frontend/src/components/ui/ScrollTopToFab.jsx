import React, { useState, useEffect } from 'react'
import { Fab, Fade, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollToTopFab = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Fade in={isVisible} timeout={500}>
            <Fab
                aria-label="scroll to top"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: 55,
                    right: 20,
                    background: 'rgb(239 68 68 / 0.9)',
                    zIndex: 1300,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transition: 'all 1s linear',

                        transform: 'scale(1.05)',
                        background: 'rgb(239 68 68 / 0.7)',
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Fade>
    )
}

export default ScrollToTopFab
