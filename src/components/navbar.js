import React from 'react'

import NavButton from './navButton'

const styles ={
    navContainer:{
        display:'flex',
    }
}
function Navbar() {
    return (
        <>
            <div className='nav-container' style={styles.navContainer}>
                <NavButton content={['My Works','home','/']}/>
                <NavButton content={['About Me','cv','/aboutMe']}/>
            </div>
        </>
    )
}

export default Navbar
