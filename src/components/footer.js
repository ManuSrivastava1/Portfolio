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
                <p className='H4 Erode'>Contact me –</p>
                <p className='Btext2 Plex'>manu_srivastava@outlook.com</p>
            </div>
            <div className='publishDate' style={styles.publish}>
                <span className='H4 Erode'>Last Updated –</span><br/>
                <span className='Btext2 Plex'>22 - Aug - 2023</span>
            </div>
            <div className='links' style={styles.clickable}>
                <div>
                    <Icon content={[githubSVG,'https://github.com/ManuSrivastava1']} />
                </div>
                <div>
                    <Icon content={[linkidInSVG,'https://www.linkedin.com/in/manu-srivastava-423456166/']} />
                </div>
                <div>
                    <Download margin={'0.5rem'}/>
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
        gridTemplateColumns:'repeat(12,1fr)',
        columnGap:'16px',
    },
    contact:{
        gridColumn: '1/5',
        overflowWrap: 'break-word',
        padding:'1.5rem',
    },
    publish:{
        gridColumn:'5/9',
        overflowWrap: 'break-word',
        padding:'1.5rem',
    },
    clickable:{
        gridColumn:'9/13',
        display:'flex',
        justifyContent:'flex-end',
        padding:'1.5rem 0rem 1.5rem 1.5rem',
    }
}
export default Footer
