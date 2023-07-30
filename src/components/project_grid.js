import React from 'react'

import ProjectCard from './projectCard'
import LinkButton from './linkButton';

function ProjectGrid() {
    return (
        <>
        <div className='projects' style={style.ProjectGrid}>
            <ProjectCard content={
                ['Predicting pollution level with an LSTM model',
                'Some project description goes here so that they know what skills were used developer',
                ['Building & Training ML Model','Python','Documentation','Tensorflow','Univariate Prediction','Data Cleaning','Data Analysis','Visualising training loss'],
                ]} 
                buttonData={
                    [<LinkButton content={['https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png','Project Repository','https://github.com/ManuSrivastava1/ML_LSTM_Timeseries']} key={1}/>,
                    <LinkButton content={['https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png','Project Repository','https://github.com/ManuSrivastava1/ML_LSTM_Timeseries']} key={2}/>]}
                />

            <ProjectCard content={
                ['Analysing Prison sentence data in Europe',
                'Some project description goes here so that they know what skills were used developer',
                ['Data Cleaning','Data Analysis','Python','JavaScript','Data Visualisation','Documentation','Publishing Open Data','Data Ethics']]} />

            <ProjectCard content={
                ['Database design and Query construction for citations in academic publications',
                'Some project description goes here so that they know what skills were used developer',
                ['Object Oriented Programming','Python','SQLite Database Design','Graph Database Design','Query Writing','Data Analysis','Software Design','Pandas']]} />

            <ProjectCard content={
                ['Data Visualisation of NFT commerce',
                'Some project description goes here so that they know what skills were used developer',
                ['Data Visualisation','Data Cleaning & Analysis','Website development','Javascript','Bootstrap']]} />
            
            <ProjectCard content={
                ['Gamifying cultural heritage through Linked Open Data',
                'Some project description goes here so that they know what skills were used developer',
                ['skill1','skill2','skill3','skill4','skill5']]} />

            <ProjectCard content={
                ["Network Analysis Of YouTube's Recomendation System From It's Early Years",
                'Some project description goes here so that they know what skills were used developer',
                ['Network Building',"Measuring Network's Properties",'Network Visualisation In Gephi','Netowrk Building from Raw Data','Statistical Analysis of Data']]} />

            <ProjectCard content={
                ["Building Knowledge Graphs from a stoics's dairy",
                'Some project description goes here so that they know what skills were used developer',
                ['Ontology Building','Sentiment Analysis','Graph Database design','Knowledge Graph design','Query Design In SPARQL','Website Design','Knowledge Extraction','Data Processing In Python']]} />

            <ProjectCard content={
                ["Master's Thesis",
                'Some project description goes here so that they know what skills were used developer',
                ['skill1','skill2','skill3','skill4','skill5','skill6']]} />
        </div>
        </>
    )
}

const style={
    ProjectGrid:{
        display:'grid',
        gridTemplateColumns:'repeat(12, 1fr)',
    }
}
export default ProjectGrid
