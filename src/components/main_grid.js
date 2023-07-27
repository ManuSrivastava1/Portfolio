import React from 'react'
import '../App.css';


import ProjectGrid from './project_grid';

function MainGrid() {
    return (
        <div className='main-grid' style={styles.mainGrid}>
            <div className='hero_text' style={styles.hero_text}>
                <span className='H1'>Searching for someone who works with </span><span className='H1B'>Machine Learning & Data Analysis </span><span className='H1'>and can also </span><span className='H1B'>Design & Develop </span><span className='H1'>digital products?</span>
            </div> 
            
            <div style={styles.projectsGrid}>
                <ProjectGrid />
            </div>     
        </div>
    )
}

const styles ={
    mainGrid:{
        paddingTop:'24vh',
        display:'grid',
        gridTemplateColumns:'repeat(12, 1fr)',
        gridColumnGap:'16px',
    },
    hero_text:{
        gridColumn: '1/9',
        padding:'1rem',

    },
    hero_text2:{
        gridColumn:'3/9',
    },
    tags:{
        paddingTop:'9vh',
        gridColumn:'3/9',
        display:'flex',
        flexWrap:'wrap',
    },
    projectsGrid:{
        paddingTop:'24vh',
        gridColumn:'1/13',
    }
    
}
export default MainGrid
