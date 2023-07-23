import React from 'react'
import githubSVG from '../images/icons8-github-ios-16-glyph/icons8-github-90.svg'



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
        <a href={githubSVG} download>
        <button style={styles.container}>
            <span className='H6'>Download CV</span>
        </button>
        </a>
        </>
    )
}

export default Download
