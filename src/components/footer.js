import React from 'react'
import '../App.css';
import Icon from './icon';
import Download from './download';

import githubSVG from '../images/icons8-github-ios-16-glyph/icons8-github-90.svg'
import linkidInSVG from '../images/icons8-linkedin-ios-16-filled/icons8-linkedin-100.svg'

function Footer() {
    return (
        <div className='footer' style={styles.footerContainer}>
            <div className='contact' style={styles.contact}>
                <p className='H4'>Contact me –</p>
                <p className='H5'>manu_srivastava@outlook.com</p>
            </div>
            <div className='publishDate' style={styles.publish}>
                <span className='H4'>Last Updated –</span><br/>
                <span className='H5'>22 - Aug - 2023</span>
            </div>
            <div className='links' style={styles.clickable}>
                <div>
                    <Icon content={[githubSVG,'https://github.com/ManuSrivastava1']} />
                </div>
                <div>
                    <Icon content={[linkidInSVG,'https://www.linkedin.com/in/manu-srivastava-423456166/']} />
                </div>
                <div>
                    <Download margin={'8px'}/>
                </div>

            </div>
        </div>
    )
}

const styles = {
    footerContainer:{
        marginTop:'32px',
        marginBottom:'32px',
        height:'92px',
        display:'grid',
        gridTemplateColumns:'repeat(8,1fr)',
        columnGap:'20px',
    },
    contact:{
        gridColumn: '1/3',
        overflowWrap: 'break-word',
        padding:'1.5rem 1.5rem 1.5rem 0rem',
    },
    publish:{
        gridColumn:'3/5',
        overflowWrap: 'break-word',
        padding:'1.5rem 1.5rem 1.5rem 0rem',
    },
    clickable:{
        gridColumn:'5/9',
        display:'flex',
        justifyContent:'flex-end',
        padding:'1.5rem 0rem 1.5rem 1.5rem',
    }
}
export default Footer
