import React from 'react'
import '../App.css';

import TagButton from './tagButton'
import ProjectGrid from './project_grid';

function MainGrid() {
    return (
        <div className='main-grid' style={styles.mainGrid}>
            <div className='hero_text H1' style={styles.hero_text}>
                <span className='Btext1'>Hello! I am a_ <br/></span>
                DIGITAL HUMANIST – DESIGNER/DEVELOPER
            </div> 
            <div className='hero_text2 Btext1' style={styles.hero_text2}>
            _ from India and currently working on my Master’s Thesis at the University of Bologna, Italy. I have worked as an experience designer in the past and my passion for technology, design and art has found found its latest calling in AI for Natural Language Processing.
            <br/><br/>
Select the tags which interest you to see a selection of my works which best show my interests and skills.
            </div> 
            <div className='tags' style={styles.tags}>
                <TagButton content={'Data Exploration & Analysis'}/>
                <TagButton content={'Database design & querying'}/>
                <TagButton content={'Machine Learning'}/>
                <TagButton content={'Storytelling & Experience Design'}/>
                <TagButton content={'Data Exploration & Analysis'}/>
                <TagButton content={'Computational Linguistics'}/>
            </div>
            <div className='projects-grid' style={styles.projectsGrid}>
                <ProjectGrid />
            </div>     
        </div>
    )
}

const styles ={
    mainGrid:{
        paddingTop:'14vh',
        display:'grid',
        gridTemplateColumns:'repeat(12, 1fr)',
        gridColumnGap:'16px',
    },
    hero_text:{
        gridColumn: '1/9',

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
        paddingTop:'9vh',
        gridColumn:'1/9',
    }
    
}
export default MainGrid
