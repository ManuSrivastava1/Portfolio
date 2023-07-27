import React from 'react'
import Photo from '../images/mefacenew@2x.png'


import SectionCard from './sectionCard'
import SectionInfo from './sectionInfo'
import Download from './download';

function AboutGrid() {
    return (
        <>  
        <div className='about-grid' style={styles.aboutGrid}>
            <img src={Photo} alt='meFace' style={styles.bg}></img>

            <div  style={styles.boldtext}>
                <span className='H1'>Meet </span>
                <span className='H1B'>Manu Srivastava </span>
                <p className='Btext1'>Here will be some text which will talk about
                why I would be a good addition to your team 
                and what are my core skills and values</p>
            </div>
            <div style={styles.button}>
                <Download margin={'8pt 0pt 8pt 0pt'}/>
            </div>
            
            <div className='sec1' style={styles.sec1}>
                <SectionCard Label={['#9B9B9B','Education']}/>
            </div>
            <div className='info1' style={styles.info1}>
                <SectionInfo content={<>
                                        <div>
                                        Bachelor's Degree - 
                                        B.des in Industrial Design
                                        September,2015- January,2020 <br/>
                                        <a href='https://www.nid.ac.in/academics/b-des-program/industrial-design' target="_blank" rel='noreferrer'>NID VIJAYAWADA</a>
                                        </div>
                                        <br/>
                                        <div>
                                        Master's Degree - 
                                        M.A in Digital Humanities
                                        September,2021 - Ongoing <br />
                                        UNI BOLOGNA <br/>
                                        Course Programme page
                                        </div>
                                        </>} />
            </div>
            <div className='sec2' style={styles.sec2}>
                <SectionCard Label={['#BBBBBB','Professional Skills']} />
            </div>
            <div className='info2' style={styles.info2}>
                <SectionInfo content={<>
                                        <div>
                                        Python – <br/> 
                                        can proficiently use python along with multiple libraries like pandas,numpy etc for building complex softwares like database management, language processing ,etc.<br/><br/>
                                        Javascript – <br/>
                                        Is comfortable using javascript for web-design and interactions of medium complexity. Has used React.js for frontend design and development.<br/><br/>
                                        Figma – <br/>
                                        can proficiently design documents and webpages using figma. Have worked collaboratively on design works in the past. <br/><br/>
                                        MS/Google Office suite - <br/>
                                        can proficiently use office suite for data exchange and communication,documentation amongst other things. <br/><br/>
                                        </div>
                                    </>} />
            </div>

            <div className='sec3' style={styles.sec3}>
                <SectionCard Label={['#777777','Work Experience','4/5']}/>
            </div>
            <div className='info3' style={styles.info3}>
                <SectionInfo content={<>
                                        <div>
                                        UX-design Associate <br/>
                                        Oct,2019 – Nov,2019 <span className='highligh'> at Netbramha Design Studio</span> <br/>
                                        A global design studio studio specialising in UX/UI solutions. My role here involves generating plans for digital products and services. while collaborating with the stakeholders.<br/><br/>
                                        UX-designer <br/>
                                        May,2020 – Jul,2020 <span className='highligh'> at Museum Memories Project</span> <br/>
                                        An oral history project started with a mentor and a friend. I was
                                        involved as UX designer and project planner to tackle issues like accessibility to museums in India during Covid.<br/><br/>
                                        UX-design Intern <br/>
                                        Jan,2019 – Jul,2019 <span className='highligh'> at Cogoport</span> <br/>
                                        As a member of UX team, I worked on several Digital products for sea based Logistics startup in Mumbai. <br/><br/>
                                        </div>

                                    </>} />
            </div>

            <div className='sec4' style={styles.sec4}>
                <SectionCard Label={['#DDDDDD','Certificates','5/6']}/>
            </div>
            <div className='info4' style={styles.info4}>
                <SectionInfo content={<>
                                        <div>
                                            IELTS - English<br/>
                                            8.0 <br/><br/>
                                            Certificate of Participation<br/>
                                            EncodeAI conference and workshop,2022<br/><br/>
                        
                                        </div>
                                    </>} />
            </div>

            <div className='sec5' style={styles.sec5}>
                <SectionCard Label={['#999999','Contact Details','6/7']}/>
            </div>
            <div className='info5' style={styles.info5}>
                <SectionInfo content={<>
                                        <div>
                                            Mobile<br/>
                                            +39 3 FIVE 19 32 ZERO 3 48 <br/><br/>
                                            E-mail 1<br/>
                                            manu.srivastava2@studio.unibo.it<br/><br/>
                                            E-mail 2<br/>
                                            manu_srivastava@outlook.com<br/><br/>
                                            Currently Living In<br/>
                                            Bologna, Italy <br/><br/>
                                        </div>
                                    </>} />
            </div>
        </div>
        </>
    )
}

const styles={
    aboutGrid:{
        paddingTop:'14vh',
        display:'grid',
        gridTemplateColumns:'repeat(12, 1fr)',
        // gridTemplateRows:'repeat(6, 1fr)',
        // gridColumnGap:'20px',
        // gridRowGap:'16px',
        position:'relative',
        zIndex:'5',
    },
    bg:{
        gridColumn:'9/13',
        gridRow:'1/5',
        width:'max(50%, 8rem)',
    },
    boldtext:{
        gridColumn:'1/9', 
        gridRow:'1/2',
        padding:'1rem',
    },
    button:{
        padding:'1rem',
        gridColumn:'1/3',
    },
    sec1:{
        gridColumn:'5/8', 
        gridRow:'3/4',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    info1:{
        gridColumn:'8/13', 
        gridRow:'3/4',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    sec2:{
        gridColumn:'5/8', 
        gridRow:'4/5',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    info2:{
        gridColumn:'8/13', 
        gridRow:'4/5',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    sec3:{
        gridColumn:'5/8', 
        gridRow:'5/6',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    info3:{
        gridColumn:'8/13', 
        gridRow:'5/6',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    sec4:{
        gridColumn:'5/8', 
        gridRow:'6/7',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    info4:{
        gridColumn:'8/13', 
        gridRow:'6/7',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    sec5:{
        gridColumn:'5/8', 
        gridRow:'7/8',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
    info5:{
        gridColumn:'8/13', 
        gridRow:'7/8',
        border:'0.5px solid rgba(43,49,47,0.2)',
    },
}

export default AboutGrid