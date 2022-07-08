import { AdbOutlined } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


function Header() {


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <header 
            id='header' 
            className="w-full z-10 h-[72px] flex flex-row items-center justify-between border-b border-[#323238] fixed px-5"
            style={{background: 'linear-gradient(0deg, rgba(0,0,0,0.2049194677871149) 0%, rgba(0,0,0,0.6026785714285714) 30%, rgba(0,0,0,0.7987570028011204) 60%, rgba(0,0,0,1) 100%)'}}
        >
        
            <img className="w-[100px] h-[50px]" src="favicon.svg" alt="logo" />

            <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                >
                <MenuIcon className="text-white"/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    <MenuItem onClick={handleCloseNavMenu} className='z-20'>
                        <nav id="navbar" className="flex flex-col uppercase text-lg">
                            <a className="px-2 text-black font-medium hover:text-blue-700" href="#sobre">sobre</a>
                            <a className="px-2 text-black font-medium hover:text-blue-700" href="#tecs">tecs</a>
                            <a className="px-2 text-black font-medium hover:text-blue-700" href="#experiencia">experiência</a>
                            <a className="px-2 text-black font-medium hover:text-blue-700" href="#projetos">projetos</a>
                        </nav>
                    </MenuItem>
                </Menu>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <nav id="navbar" className=" uppercase text-lg ">
                    <a className="px-2 text-white font-medium hover:text-blue-700" href="#sobre">sobre</a>
                    <a className="px-2 text-white font-medium hover:text-blue-700" href="#tecs">tecs</a>
                    <a className="px-2 text-white font-medium hover:text-blue-700" href="#experiencia">experiência</a>
                    <a className="px-2 text-white font-medium hover:text-blue-700" href="#projetos">projetos</a>
                </nav>
            </Box>

        </header>
    )
}

export default Header