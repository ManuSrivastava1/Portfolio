import React from 'react'

const styles = {
    container:{
        padding:'8px',
        width:'2.5rem',
        height:'2.5rem',

        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        width:'2rem',
        height:'2rem',
    }
}

function Icon({content}) {
    return (
        <>
        <a href={content[1]} target="_blank" rel="noopener noreferrer">
            <div className='iconContainer' style={styles.container}>
                <img src={content[0]} alt='icon-name' style={styles.icon}/>
            </div>
        </a>
        
        </>
    )
}

export default Icon
