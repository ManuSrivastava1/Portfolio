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
            
            backgroundColor: isHovered ? 'lightblue' : 'transparent',
            borderColor: isHovered ? 'blue' : 'black',
        },
        span:{
            lineHeight:'44px',
            textDecoration:'none',
            color:'#090EC6',

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
            <span className='H6' id={content[1]} style={styles.span}>{content[0]}</span>
        </div>
        </Link>
        </>
    )

    
}

export default NavButton
