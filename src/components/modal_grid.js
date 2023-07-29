import React from 'react'

import Tag from './tagButton';

function ModalGrid({content}) {
    // const tagArray = Array.from({ length: content[2].length }, (_, index) => index);
    //const i = content[2].length;
    const tagComponents = [];

    for (let i = 0; i < content[2].length; i++) {
        // console.log('Loop iteration:', i);
        tagComponents.push((<Tag key={i} content={content[2][i]} />))
      }

    const styles ={
        container:{
            display:'grid',
            gridTemplateColumns:'repeat(12, 1fr)',
            gridTemplateRows:'15% 70% 15%',
            height:'100%',
        },
        title:{
            gridColumn:'1/10',
            gridRow:'1/2',
            display: 'flex',
            alignItems: 'center',
            //justifyContent: 'start',
        },
        body:{
            gridColumn:'1/10',
            gridRow:'2/3',
            
        },
        bodyText:{
            fontSize:'1rem',
            color:'black', 
        },
        foot:{
            gridColumn:'1/10',
            gridRow:'3/4',
        },
        side:{
            gridColumn:'10/13',
            gridRow:'2/5',
            display: 'flex',
            flexWrap:'wrap',
            // border:'0.5px solid rgba(43,49,47,0.2)'
            marginBottom:'auto',
        },
        tagT:{
            width:'100%',
            display: 'flex',
            alignItems: 'center',
            // padding:'0.5rem',
            marginBottom:'0.8rem',
        },
    };
    return (
        <>
        <div className='gridModal' style={styles.container}>
            <div style={styles.title}>
                <span className='H2 Erode'>{content[0]}</span>
            </div>
            <div style={styles.body}>
                <p className='H3 Erode resp'>About This Project</p> <br/>
                <p className='Btext2 QuestaG' style={styles.bodyText}>{content[1]}</p>
            </div>
            <div style={styles.foot}>
                <span className='H3 Erode resp'>Links to the project</span>
            </div>
            <div style={styles.side}>
                <div style={styles.tagT}>
                    <span className='H3 Erode resp'>Key-Learnings</span>
                </div>
                {tagComponents}
                {/*<Tag content={content[2][0]} />*/}
                {/*
                {tagArray.map((tagIndex) => (
                 <Tag key={tagIndex} text={`Tag ${tagIndex + 1}`} />
                ))}*/}
            </div>
            
        </div>
        </>
    )
}

export default ModalGrid
