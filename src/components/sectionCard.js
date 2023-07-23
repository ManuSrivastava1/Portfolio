import React from 'react'

function SectionCard({ Label }) {
    const color = Label[0]
    
    const styles = {
        card:{
            backgroundColor: color,
            display:'flex',
            alignItems:'center',
            justifyContent:'Left',
            borderRadius:'16px',
            marginBottom: 'auto',
            padding:'2rem',
        },
        text:{
            color:'white',
        }
    }

    return (
        <>
        <div className='Sectioncard' style={styles.card}>
        
            <p className='H2' style={styles.text}>
                { Label[1] }
            </p>
        </div>
        </>
    )

    
}



    

export default SectionCard
