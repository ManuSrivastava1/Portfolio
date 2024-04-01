import React from 'react'
import { useState } from 'react';

import CV from '../CV[40].pdf'




function Download({margin}) {
    const [isHovered, setIsHovered ] = useState(false);

    const handleMouseEnter = () =>{
        setIsHovered(true);
    };
    const handleMouseLeave = () =>{
        setIsHovered(false);
    };

    const marg = margin
    const styles = {
        container:{
            margin:marg,
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            height:'1.5rem',
            width:'6rem',
            padding:'0.5rem',
            backgroundColor: isHovered? '#244238':'Transparent',
            border:'1px solid #244238',
            
        },
        text:{
            color: isHovered? 'white': '#244238',
        },
        link:{
            textDecoration:'none',
        }
    }

    return (
        <>
        <a href={CV} download style={styles.link}>
        <div style={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className='H5 Erode' style={styles.text}>Download CV</span>
        </div>
        </a>
        </>
    )
}

export default Download
