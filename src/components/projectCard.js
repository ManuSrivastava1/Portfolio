import React from 'react'

function ProjectCard({content}) {
    const color = content[2]
    const styles = {
        card:{
            // width:'min(450px, 30vw)',
            height:'max(250px, calc(0.6 * min(450px, 30vw)))',
            border:'1px solid',
            gridColumn: 'auto / span 4',
            marginBottom:'16px',
            borderColor: color,
        },
        cardHeader:{
            height:'18%',
            backgroundColor: color,
            padding:'16px',
        },
        cardBody:{
            padding:'16px',
        }
    }

    return (
        <>
            <div style={styles.card}>
                <div className='cardHeader' style={styles.cardHeader}>
                    <span className='H4'>{content[0]}</span>
                </div>
                <div className='cardBody' style={styles.cardBody}>
                    <span className='Btext1'>{content[1]}</span>
                </div>
            </div>
        </>
    )
}



export default ProjectCard
