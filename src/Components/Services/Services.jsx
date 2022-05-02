import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = {duration: 1, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">

            {/*left side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>

            {/*right side*/}
            <div className="cards">
                <motion.div 
                    initial={{left: '25%'}}
                    whileInView={{left: '14rem'}}
                    transition={transition}
                >
                    <Card 
                        emoji= {HeartEmoji} 
                        heading={'Design'} 
                        detail={'Figma, Photoshop, Adobe'}
                    />
                </motion.div>
                <motion.div 
                    initial={{left:'-11rem', top:'12rem'}}
                    whileInView={{left:'-4rem'}}
                    transition={transition}
                >
                    <Card 
                        emoji= {Glasses} 
                        heading={'Developer'} 
                        detail={'HTML, CSS, Javascript, React, SQL, C#, .NET, Sharepoint'}
                    />
                </motion.div>
                <motion.div
                    initial={{left:'25rem', top:'19rem'}}
                    whileInView={{left:'12rem'}}
                    transition={transition}
                >
                    <Card 
                        emoji= {Humble} 
                        heading={'Low Code'} 
                        detail={'K2, UiPath'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>

        </div>
    )
}

export default Services