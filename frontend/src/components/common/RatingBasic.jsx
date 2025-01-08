import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default function RatingBasic() {
    const [value, setValue] = React.useState(2)

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                minHeight: '20vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 3%',
                background: 'rgb(31 41 55 )',
            }}
        >
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                    minHeight: '20vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    alignItems: 'start',
                    background: 'rgb(31 41 55 )',
                }}
            >
                {' '}
                <Typography component="legend">
                    Ahora es tu momento de Calificar la App
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                />
            </Box>
            <button className="border rounded border-white h-8 px-2 transition hover:bg-white ">
                Calificar
            </button>
        </Box>
    )
}
