import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import InfoIcon from '@mui/icons-material/Info'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LineWeightIcon from '@mui/icons-material/LineWeight'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BasicModalCart from '../ui/BasicModalCart'
const urlBasic = ['/', '/dashboard', '/contact', '/shop']
const nameBasic = ['Inicio', 'Admin', 'Contáctanos', 'Tienda']
const iconBasic = [
    <HomeIcon />,
    <SupervisorAccountIcon />,
    <ContactPageIcon />,
    <AddShoppingCartIcon />,
]

const urlOthers = ['/about', '/profile']
const nameOthers = ['Sobre Nosotros', 'Perfil']
const iconOthers = [<InfoIcon />, <AccountBoxIcon />]

export default function DrawerBasic() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <div className="min-h-[100%]">
            <Box
                sx={{
                    background: 'rgb(50,50,50)',
                    color: 'gray',
                    minHeight: '100%',
                    width:
                        anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List sx={{}}>
                    {nameBasic.map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ background: 'rgb(50,50,50)', color: 'gray' }}
                        >
                            <Link
                                to={urlBasic[index]}
                                className="flex gap-2 px-4 py-2"
                            >
                                <ListItemIcon sx={{ color: 'gray' }}>
                                    {iconBasic[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {nameOthers.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <Link
                                to={urlOthers[index]}
                                className="flex gap-2 px-4 py-2"
                            >
                                <ListItemIcon sx={{ color: 'gray' }}>
                                    {iconOthers[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <div className="list-none w-full flex justify-center items-center">
                    <BasicModalCart />,
                </div>
            </Box>
        </div>
    )

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        sx={{ color: 'gray' }}
                        onClick={toggleDrawer(anchor, true)}
                        startIcon={<LineWeightIcon />}
                    >
                        {''}
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
