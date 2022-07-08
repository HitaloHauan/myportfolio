import { Close } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import React from "react";

const style = {
    borderRadius: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 450,
    width: '100%',
    heigth: '100%',
    maxHeight: 790,
    bgcolor: '#121214',
    boxShadow: 24,
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    m: 0, 
    paddingBottom: '10px',
};

function Content() {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpen1 = () => setOpen1(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);

    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);
    const handleClose4 = () => setOpen4(false);


    return (
        <body id='content' className="flex flex-col w-full h-full justify-center items-center" data-spy="scroll" data-target="#navbar" data-offset="50">
        
            <div 
                id="sobre" 
                className="flex w-full items-center justify-center flex-wrap pt-40 pb-32" 
                style={{background:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(24,9,83,1) 25%, rgba(24,6,93,1) 50%, rgba(24,9,83,1) 75%, rgba(0,0,0,1) 100%)'}}
            >
                <div className="flex flex-col items-center justify-center py-5 px-5">
                    <img className='w-[310px] rounded-full border-4' src="./src/assets/Perfil.jpg" alt="" />
                    <Typography variant="h4" className="text-white uppercase pt-4">hitalo hauan</Typography>
                    <Typography className="text-white nowrap whitespace-nowrap">20 anos, Atualmente no Mato Grosso</Typography>
                </div>

                <div className="flex items-center flex-wrap justify-center px-5 py-5">
                    <img className="h-14" src="./src/assets/left.png" alt="" />
                    <Typography variant="h6" className="text-white max-w-[700px] text-justify px-4 py-4">Desenvolvedor Web Júnior com experiência de 9 meses de prestação de serviços,
                     aproximadamente dois anos de estudo em programação e alguns projetos pessoais desenvolvidos.
                    Tenho atualmente meu foco de estudo voltado para o React Js e criação de interfaces e funcionalidades no Front-End. Aberto a propostas e oportunidades!
                    </Typography>
                    <img className="h-20" src="./src/assets/right.svg" alt="" />
                </div>
            </div>

            <div id="tecs" className="w-full flex flex-col items-center justify-center pb-20">
                <h2 className="text-white uppercase text-center text-3xl pb-10 font-medium">tecs</h2>

               <div className="flex flex-wrap justify-center pb-10">
                    <div className="flex py-5 flex-wrap justify-center">
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/html.svg" alt="html" />
                            <span className="text-white cursor-default">HTML</span>
                        </div>
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/css.svg" alt="css" />
                            <span className="text-white cursor-default">CSS</span>
                        </div>
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/js.svg" alt="js" />
                            <span className="text-white cursor-default">JavaScript</span>
                        </div>
                    </div>
                    <div className="flex py-5 flex-wrap justify-center">
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/react.svg" alt="react" />
                            <span className="text-white cursor-default">ReactJs</span>
                        </div>
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/node.svg" alt="nodejs" />
                            <span className="text-white cursor-default">NodeJs</span>
                        </div>
                        <div className="flex flex-col justfy-center items-center">
                            <img className="w-20 h-20 mx-4 my-4 hover:w-24 hover:my-0 hover:h-24 transition-[0.6s]" src="./src/assets/tecs/git.svg" alt="git" />
                            <span className="text-white cursor-default">GIT</span>
                        </div>
                    </div>
               </div>

            </div>

            <div id='experiencia' className=" flex flex-col items-center justify-center pb-10 px-5">
                <h2 className="text-white uppercase text-center text-3xl pb-10 font-medium">experiência</h2>

                <div className="flex min-w-[200px] max-w-[1500px] flex-row justify-between flex-wrap w-full pb-5">

                    <Typography className="text-white text-lg px-6 flex-nowrap p-4">mai de 2021 - jan de 2022</Typography>
                    <div className="bg-gray-900 rounded-[10px] min-w-[300px] max-w-[900px] w-full mb-5">
                        <Typography variant="h6" className="text-white text-lg px-6 pt-6">X7 Bank</Typography>
                        <p className="text-gray-400 text-xs px-6 pb-5">Remoto</p>
                        <Typography className="text-gray-300 text-justify text-md px-6 pb-6">Desenvolvimento da Plataforma Web da empresa em React, consumo de API, 
                        desenvolvimento de novas funcionalidades e design de modais e páginas.
                        </Typography>
                    </div>

                </div>
                
                <div className="flex flex-row justify-between flex-wrap w-full pb-5">

                    <Typography className="text-white text-lg px-6 flex-nowrap p-4">data ini - data fim</Typography>
                    <div className="bg-gray-900 rounded-[10px] min-w-[100px] max-w-[900px] w-full mb-5">
                        <Typography variant="h6" className="text-white text-lg px-6 pt-6">( PRÓXIMA EMPRESA AQUI )</Typography>
                        <p className="text-gray-400 text-xs px-6 pb-5">Remoto ou Presencial</p>
                        <Typography className="text-gray-300 text-justify text-md px-6 pb-6">Descrição das atividades aqui
                        </Typography>
                    </div>

                </div>
            </div>

            <div id='projetos' className="flex flex-col justify-center items-center px-5 pb-10">
                <h2 className="text-white text-center uppercase text-3xl pb-10 font-medium">projetos</h2>

                <div className="flex justify-center items-center flex-wrap">
                    {/* projeto 1 */}
                    <Button onClick={handleOpen}><img className="w-[300px] rounded-[10px] hover:opacity-80" src="./src/assets/project1.jpg" alt="" /></Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        keepMounted
                    >
                        <Box sx={style}>
                            <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                color: 'white',
                            }}
                            >
                                <Close />
                            </IconButton>
                            <img className="w-[362px]  rounded-[10px] mt-10" src="./src/assets/project1.jpg" alt="" />
                            <Typography id="modal-modal-description" className="text-white px-10 pt-5">
                            O projeto visa exercitar meus conhecimentos em React, e funciona a partir dos dados recebidos de solicitações feitas à API pública da Riot Games, 
                            do game League of Legends. A partir do apelido do jogador podemos requisitar a api dados de qualquer conta no jogo, como por exemplo:<br/>
                                - Domínio dos campeões.<br/>
                                - Nível da conta<br/>
                                - Posição na fila ranqueada
                            </Typography>
                           
                            <div className="p-1 w-40 mt-2 flex rounded-md items-center justify-center text-center border-2 border-blue-600 ">
                                <a className="text-white uppercase w-40 hover:text-blue-400" href="">ver repositório</a>
                            </div>
                        </Box>
                    </Modal>

                    {/* projeto 2 */}

                    <Button onClick={handleOpen1}><img className="w-[300px] h-[300px] rounded-[10px] hover:opacity-80" src="./src/assets/project2.png" alt="" /></Button>
                    <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        keepMounted
                    >
                        <Box sx={style}>
                            <IconButton
                            aria-label="close"
                            onClick={handleClose1}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                color: 'white',
                            }}
                            >
                                <Close />
                            </IconButton>
                            <img className="w-[362px]  rounded-[10px] mt-10" src="./src/assets/project2.png" alt="" />
                            <Typography id="modal-modal-description" className="text-white px-10 pt-5">
                            O projeto foi desenvolvido na semana do IgniteLab, elaborado pela ROCKETSEAT, ultilizando ferramentas como ReactJs, 
                            TypeScript, TailwindCss, Vite e com os dados extraidos de uma api desenvolvida em um headless Cms (GraphCMS) em GraphQL
                            </Typography>
                           
                            <div className="p-1 w-40 mt-2 flex rounded-md items-center justify-center text-center border-2 border-blue-600 ">
                                <a className="text-white uppercase w-40 hover:text-blue-400" target="_blank" href="https://github.com/HitaloHauan/ignitelab-hitalo">ver repositório</a>
                            </div>
                        </Box>
                    </Modal>

                    {/* projeto (em breve) */}

                    <Button onClick={handleOpen2}><img className="w-[300px] rounded-[10px] hover:opacity-80" src="./src/assets/breve.png" alt="" /></Button>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        keepMounted
                        sx={{ }}
                    >
                        <Box sx={style}>
                            <IconButton
                            aria-label="close"
                            onClick={handleClose2}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                color: 'white',
                            }}
                            >
                                <Close />
                            </IconButton>
                            <img className="w-[362px]  rounded-[10px] mt-10" src="./src/assets/breve.png" alt="" />
                            <Typography id="modal-modal-description" className="text-white px-10 pt-5">
                            Projetos aparecerão por aqui em breve!
                            </Typography>
                            <div className="p-1 w-40 mt-2 flex rounded-md items-center justify-center text-center border-2 border-gray-600">
                                <Typography className="text-gray-500 cursor-default uppercase w-40 mb-2">ver repositório</Typography>
                            </div>
                        </Box>
                    </Modal>
                </div>

            </div>
            
        </body>
    )
}

export default Content