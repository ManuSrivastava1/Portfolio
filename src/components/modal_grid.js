import React from 'react'

function ModalGrid({content}) {
    const styles ={
        container:{
            display:'grid',
            gridTemplateColumns:'repeat(12, 1fr)',
            gridTemplateRows:'15% 70% 15%',
            height:'100%',
        },
        title:{
            gridColumn:'1/10',
            gridRow:'1/2'
        },
        body:{
            gridColumn:'1/10',
            gridRow:'2/3',
            
        },
        foot:{
            gridColumn:'1/10',
            gridRow:'3/4',
        },
        side:{
            gridColumn:'10/13',
        }
    };
    return (
        <>
        <div className='gridModal' style={styles.container}>
            <div style={styles.title}>
                <span>{content}</span>
            </div>
            <div style={styles.body}>
                <p>Here's the modal content...</p>
            </div>
            <div style={styles.foot}>
                <span>Links to the project</span>
            </div>
            <div>
                <span>Key-Learnings</span>
            </div>
            
        </div>
        </>
    )
}

export default ModalGrid
