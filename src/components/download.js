import React from 'react'
import CV from '../CV[40].pdf'



function Download({margin}) {
    const marg = margin
    const styles = {
        container:{
            margin:marg,
            height:'2.5rem',
            padding:'0.5rem',
            backgroundColor:'Transparent',
            border:'1px solid #090EC6'
        }
    }

    return (
        <>
        <a href={CV} download>
        <button style={styles.container}>
            <span className='H6'>Download CV</span>
        </button>
        </a>
        </>
    )
}

export default Download
