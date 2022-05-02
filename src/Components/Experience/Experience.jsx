import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle" 
                    style={{color: darkMode? 'var(--orange)': '', }}>2</div>
                <span>years </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode? 'var(--orange)': ''}}>10+</div>
                <span>completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode? 'var(--orange)': ''}}>2</div>
                <span>companies </span>
                <span>Worked</span>
            </div>
        </div>
    )
}

export default Experience