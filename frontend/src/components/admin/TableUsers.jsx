import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Avatar } from '@mui/material'

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    }
}

function Row(props) {
    const { row } = props
    const [open, setOpen] = React.useState(false)

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset',fontWeight:'light' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Avatar alt="Remy Sharp" src={row.name} />
                </TableCell>
                <TableCell align="right" sx={{fontWeight:'light'}}>{row.calories}</TableCell>
                <TableCell align="right" sx={{fontWeight:'light'}}>{row.fat}</TableCell>
                <TableCell align="right" sx={{fontWeight:'light'}}>{row.carbs}</TableCell>
                <TableCell align="right" sx={{fontWeight:'light'}}><button className='bg-red-500/70 p-2 rounded transiton hover:bg-red-500/80 text-white'>Quitar</button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1,padding:'2%' }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow sx={{fontWeight:'light'}}>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">
                                            Amount
                                        </TableCell>
                                        <TableCell align="right">
                                            Total price ($)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>
                                                {historyRow.customerId}
                                            </TableCell>
                                            <TableCell align="right">
                                                {historyRow.amount}
                                            </TableCell>
                                            <TableCell align="right">
                                                {Math.round(
                                                    historyRow.amount *
                                                        row.price *
                                                        100
                                                ) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.string.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
}

const rows = [
    createData(
        './users/brooke-cagle-oI3xAJga5HY-unsplash.jpg',
        'Luisa',
        "luisa@gmail.com",
        "Usuario",
        24,
        4.0,
        3.99
    ),
    createData(
        './users/clem-onojeghuo-DoA2duXyzRM-unsplash.jpg',
        'Lucas perez',
       "lucas@gmail.com",
       "Usuario",

       37,
        4.3,
        4.99
    ),
    createData(
        './users/greg-rakozy-oMpAz-DN-9I-unsplash.jpg',
        'Elena de la Cruz',
        "elena@gmail.com",
        "Usuario",

        24,
        6.0,
        3.79
    ),
    createData(
        './users/headway-5QgIuuBxKwM-unsplash.jpg',
        'Javier Ernesto',
        "javier@gmail.com",
        "Usuario",

        67,
        4.3,
        2.5
    ),
    createData(
        './users/scott-graham-5fNmWej4tAA-unsplash.jpg',
        'Jose lugo',
        "jose@gmail.com",
        "Usuario",

        49,
        3.9
    ),
]

export default function TableUsers() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell />
                        <TableCell>Avatar</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Correo</TableCell>
                        <TableCell align="center">Roll</TableCell>
                        <TableCell align="center">
                            <button className="bg-red-500/70"></button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
