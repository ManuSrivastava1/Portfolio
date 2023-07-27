import React from 'react'

function SectionInfo({content}) {
    // const position = content[1]

    const styles = {
        card:{
            gridColumn:'5/9',
            backgroundColor:'#D9D9D9',
            padding:'1rem',
        }
    }

    return (
        <>
        <div className='info' style={styles.card}>
            <span className='Btext1 QuestaG'>
                {content}
            </span>
        </div>
        
        </>
    )
}

export default SectionInfo
