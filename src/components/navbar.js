import React from 'react'

import NavButton from './navButton'

const styles ={
    nav:{
        position: 'sticky', // Make the parent sticky
        top: 0, // Stick the parent (and the Navbar inside) to the top of the viewport
        },
    navContainer:{
        display:'flex',
        background: '#D9D9D9',
        width:'100%',
    }
}
function Navbar() {
    return (
        <>
            <div className='nav' style={styles.nav}>
                <div className='nav-container' style={styles.navContainer}>
                    <NavButton content={['My Works','home','/']}/>
                    <NavButton content={['About Me','cv','/aboutMe']}/>
                </div>
            </div> 
        </>
    )
}

export default Navbar
