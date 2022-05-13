import React, { useState } from 'react'
import { DeviceHub, Mail, Notifications } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}>
                    LOUAK DEV
            </Typography>
            <DeviceHub sx={{ display: { xs: "block", sm: "none" } }} />
            <Search>
                <InputBase placeholder="search..."/>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
                    <Notifications />
                </Badge>
                <Avatar
                    sx={{ width: 30, height: 30, cursor: "pointer" }}
                    src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    onClick={() => setOpen(!open)}
                />
            </Icons>
            <UserBox>
                <Avatar
                    sx={{ width: 30, height: 30, cursor: "pointer" }}
                    src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    onClick={() => setOpen(!open)}
                />
                <Typography variant="span">John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            open={open}
            onClose={() => setOpen(!open)}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar