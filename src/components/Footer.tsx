import { Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material"
import { Divider, IconButton, Typography } from "@mui/material"
import React from "react"

function Footer() {

    return(
        <footer id='footer' className="flex justify-center items-center w-full h-32 border-t border-[#323238] p-5">

            <div className="flex flex-col justify-center items-end">
                <a href="https://wa.me/5566996758254?text=Olá%20Hitalo,%20Gostaria%20de%20fazer%20uma%20à%20proposta!" target="_blank">
                    <IconButton className="flex justify-center items-center p-1">
                        <Typography className='text-white'>(66) 9 9675-8254</Typography>
                        <WhatsApp className="text-white" sx={{ fontSize: 30, m: '0 10px 0 10px'}} />
                    </IconButton>
                </a>
                <a href="mailto:hitalodev@hotmail.com?subject=Olá" >
                    <IconButton className="flex justify-center items-center p-1">
                        <Typography className='text-white'>hitalodev@hotmail.com</Typography>
                        <Email className="text-white" sx={{ fontSize: 30, m: '0 10px 0 10px'}} />
                    </IconButton>
                </a>
            </div>
            <Divider orientation="vertical" className="bg-[#323238]"/>
            <div className="flex flex-col justify-center ">
                <a href="https://www.linkedin.com/in/hitalo-hauan/" target="_blank">
                    <IconButton className="flex justify-center items-center p-1">
                        <LinkedIn className="text-white" sx={{ fontSize: 30, m: '0 10px 0 10px'}} />
                        <Typography className='text-white'>Linkedin</Typography>
                    </IconButton>
                </a>
                <a href="https://github.com/HitaloHauan" target="_blank">
                    <IconButton className="flex justify-center items-center p-1">
                        <GitHub className="text-white" sx={{ fontSize: 30, m: '0 10px 0 10px'}} />
                        <Typography className='text-white'>GitHub</Typography>
                    </IconButton>
                </a>
            </div>

        </footer>
    )
}

export default Footer