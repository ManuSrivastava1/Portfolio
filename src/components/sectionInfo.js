import React from 'react'

function SectionInfo({content}) {
    // const position = content[1]

    const styles = {
        card:{
            gridColumn:'5/9',
            backgroundColor:'white',
            borderRadius:'16px',
        }
    }

    return (
        <>
        <div className='info' style={styles.card}>
            {content}
        </div>
        
        </>
    )
}

export default SectionInfo
