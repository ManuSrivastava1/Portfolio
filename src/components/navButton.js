import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function NavButton({content}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const styles = {
        navButton:{
            height: '46px',
            marginRight:'16px',
            padding:'0 16px 0 16px',
            
            backgroundColor: isHovered ? '#244238' : 'transparent',
        },
        span:{
            lineHeight:'44px',
            textDecoration:'none',
            color: isHovered? 'white' : '#244238',
        }
    }

    return (
        <>
        <Link to={content[2]} style={styles.span}>
        <div
            className='tagButton'
            style={styles.navButton}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <span className='H4 Erode' id={content[1]} style={styles.span}>{content[0]}</span>
        </div>
        </Link>
        </>
    )

    
}

export default NavButton
