import React from 'react'

import ProjectCard from './projectCard'

function ProjectGrid() {
    return (
        <>
        <div className='projects' style={style.ProjectGrid}>
            <ProjectCard content={
                ['Predicting pollution level with an LSTM model',
                'Some project description goes here so that they know what skills were used developer',
                "#EE7E56"]} />
            <ProjectCard content={
                ['Analysing Prison sentence data in Europe',
                'Some project description goes here so that they know what skills were used developer',
                "#F5BB63"]} />
            <ProjectCard content={
                ['Data Visualisation of NFT commerce',
                'Some project description goes here so that they know what skills were used developer',
                "#F5BB63"]} />
            <ProjectCard content={
                ['Database design and Query construction for citations in academic publications',
                'Some project description goes here so that they know what skills were used developer',
                "#65AF79"]} />
            <ProjectCard content={
                ['Gamifying cultural heritage through Linked Open Data',
                'Some project description goes here so that they know what skills were used developer',
                "#8AC4D8"]} />
            <ProjectCard content={
                ['Digital Publication for the web',
                'Some project description goes here so that they know what skills were used developer',
                "#8AC4D8"]} />
            <ProjectCard content={
                ["Building Knowledge Graphs from a stoics's dairy",
                'Some project description goes here so that they know what skills were used developer',
                "#8AC4D8"]} />
            <ProjectCard content={
                ["Master's Thesis",
                'Some project description goes here so that they know what skills were used developer',
                "#D88AA6"]} />
        </div>
        </>
    )
}

const style={
    ProjectGrid:{
        display:'grid',
        gridTemplateColumns:'repeat(8, 1fr)',
        gridColumnGap:'16px',
    }
}
export default ProjectGrid
