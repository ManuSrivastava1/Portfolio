import React from 'react'

import ProjectCard from './projectCard'
import LinkButton from './linkButton';

import websiteIcon from '../images/icons8-website-48.png'
import githubSVG from '../images/icons8-github-ios-16-glyph/icons8-github-90.svg'

function ProjectGrid() {
    return (
        <>
        <div className='projects' style={style.ProjectGrid}>
            <ProjectCard content={
                ['Predicting pollution level with an LSTM model',
                <>
                This project was done as as an end-of-course project for the "Machine Learning systems for Data Science" course of the Master Degree in Digital Humanities and Digital Knowledge of the University of Bologna, held by professors Stefano Lodi and Elisabetta Ronchieri.<br/><br/>
                
                The purpose of the project is to replicate the work process used for the case study in the research paper 'Prediction of air quality in Jakarta during the COVID-19 outbreak using long short-term memory machine learning' by Wihayati and F W Wibowo 2021 IOP Conf. Ser.: Earth Environ. Sci. 704 012046.<br/><br/>

                The data used in the project was provided by the prfessor and the links to the data source and other information about the project can be found on the project repository. 
                </>,

                ['Building & Training ML Model','Python','Documentation','Tensorflow','Univariate Prediction','Data Cleaning','Data Analysis','Visualising training loss'],
                ]} 
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/ML_LSTM_Timeseries']} key={1}/>,]}
                />

            <ProjectCard content={
                ['Analysing Prison sentence data in Europe',
                'Some project description goes here so that they know what skills were used developer',
                ['Data Cleaning','Data Analysis','Python','JavaScript','Data Visualisation','Documentation','Publishing Open Data','Data Ethics']]}
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/Prisoner-s-Dilemma/BarsBehindBars']} key={1}/>,
                    <LinkButton content={[websiteIcon,'Project Website','https://prisoner-s-dilemma.github.io/BarsBehindBars/']} key={2}/>]} />

            <ProjectCard content={
                ['Database design and Query construction for citations in academic publications',
                'Some project description goes here so that they know what skills were used developer',
                ['Object Oriented Programming','Python','SQLite Database Design','Graph Database Design','Query Writing','Data Analysis','Software Design','Pandas']]}
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/dsORMA']} key={1}/>]} />

            <ProjectCard content={
                ['Data Visualisation of NFT commerce',
                'Some project description goes here so that they know what skills were used developer',
                ['Data Visualisation','Data Cleaning & Analysis','Website development','Javascript','Bootstrap']]} 
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/NFT-iness/New_NFT_Project']} key={1}/>,
                    <LinkButton content={[websiteIcon,'Project Website','https://nft-iness.github.io/New_NFT_Project/']} key={2}/>]}/>
            
            <ProjectCard content={
                ['Gamifying cultural heritage through Linked Open Data',
                'Some project description goes here so that they know what skills were used developer',
                ['skill1','skill2','skill3','skill4','skill5']]} 
                buttonData={
                    [<LinkButton content={[websiteIcon,'Project Presentation','https://docs.google.com/presentation/d/1hrY0EupX9_frQnf_n3zjZtMkKDvC_SKJARGbko_uvRc/edit?usp=sharing']} key={1}/>]}/>

            <ProjectCard content={
                ["Network Analysis Of YouTube's Recomendation System From It's Early Years",
                'Some project description goes here so that they know what skills were used developer',
                ['Network Building',"Measuring Network's Properties",'Network Visualisation In Gephi','Netowrk Building from Raw Data','Statistical Analysis of Data']]} 
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/Youtube_video_networkAnalysis']} key={1}/>,
                    <LinkButton content={[websiteIcon,'Project Report','https://docs.google.com/document/d/1ef9MOGB_F7hGza6ANUF1KRqpzAHytLSGwEG4r5_K8WI/edit?usp=sharing']} key={2}/>]}/>

            <ProjectCard content={
                ["Building Knowledge Graphs from a stoics's dairy",
                'Some project description goes here so that they know what skills were used developer',
                ['Ontology Building','Sentiment Analysis','Graph Database design','Knowledge Graph design','Query Design In SPARQL','Website Design','Knowledge Extraction','Data Processing In Python']]} 
                buttonData={
                    [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ONTOmeditations/OntoMeditations']} key={1}/>,
                    <LinkButton content={[websiteIcon,'Project Website','https://ontomeditations.github.io/OntoMeditations/']} key={2}/>]}/>

            <ProjectCard content={
                ["Master's Thesis",
                "This project is a placeholder for the project as it's currently a WIP. Feel free to contact me to know more about it. ",
                []]} 
                />
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
