import React from 'react'
import Navbar from '../navbar'
import { useContext } from 'react'
import { DarkModeContext } from '../../darkMode/context'
import { Content, Container, Spiner } from './style'
import Home from '../home'
import About from '../about'
import Skills from '../skill'
import Portfolio from '../portfolio'
import Contact from '../contact'
import Footer from '../footer'
import { PuffLoader } from 'react-spinners'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Layout() {
    const [theme] = useContext(DarkModeContext);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1500)
    }, [])
    return (
        <>
         
        
            {
                load ?
                    <Spiner style={{ backgroundColor: theme ? "#1A202C" : "#FFFF"  }}> <PuffLoader
                        color='#00DDFF'
                    /></Spiner>
                    :
                    <>
                        <body style={{ backgroundColor: theme ? "#1A202C" : "#FFFF" }}>
                            <Container>
                                <Navbar />
                                <Home />
                                <About />
                                <Skills />
                                <Portfolio />
                                <Contact />
                                <Footer />
                            </Container>
                        </body>
                    </>
            }
        </>
    )
}
