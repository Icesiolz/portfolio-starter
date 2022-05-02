import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import glassesemoji from '../../img/glassesemoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                    <span>Cheng Yi (Shawn)</span>
                    <span>Fullstack developer/Solutions Architect with experience in setting up Company Intranet and Automated Invoicing System</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/Icesiolz">
                        <img src={Github} alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/in/low-cheng-yi-982257151/">
                        <img src={LinkedIn} alt=""></img>
                    </a>
                    <a href="https://www.instagram.com/icesiolz/">
                        <img src={Instagram} alt=""></img>
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""></img>
                <img src={Vector2} alt=""></img>
                <img src={boy} alt=""></img>
                <motion.img 
                    initial={{left: '-36%'}}
                    whileInView={{left: '-20%'}}
                    transition={transition}
                    src={glassesemoji} alt=""/>
                <motion.div
                    initial={{top: '-4%', left: '74%'}}
                    whileInView={{left: '68%'}}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div 
                    initial={{top: '18rem', left: '9rem'}}
                    whileInView={{left: '0rem'}}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1='Solutions' txt2='Architect'/>
                </motion.div>
                {/* blur divs */}
                <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur' style={{background: "#C1F5FF", top: '17rem', width: '21rem', height:'11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro