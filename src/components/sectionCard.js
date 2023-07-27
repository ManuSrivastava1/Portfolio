import React from 'react'


function SectionCard({ Label }) {
    // const color = Label[0]
    
    const styles = {
        card:{
            
            display:'flex',
            alignItems:'center',
            justifyContent:'Left',
            marginBottom: 'auto',
            padding:'1rem',
        },
        text:{
            color:'#244238'
        }
    }

    return (
        <>
        <div className='Sectioncard' style={styles.card}>
        
            <p className='H2 Erode' style={styles.text}>
                { Label[1] }
                
            </p>
        </div>
        </>
    )

    
}



    

export default SectionCard
