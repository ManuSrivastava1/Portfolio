import React, { useState } from 'react'

function LinkButton({ content }) {
    const [ishover, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const styles = {
      container: {
        display: 'flex',
        height: '3rem',
        border: '1px solid black',
        width: '12rem',
        justifyContent: 'center',
        alignItems: 'center', // Vertically align the items
        padding: '0.25rem 0.25rem',
        backgroundColor:ishover? '#244238' :'Transparent',
      },
      icon: {
        width: '1.5rem',
        padding: '4px',
        height: '1.5rem',
      },
      mainCont: {
        width: 'fit-content',
        marginRight: '1rem',
        marginTop: '1rem',
      },
      text:{
        color: ishover? 'white': '#244238',
      },
      link:{
        textDecoration:'none',
      }
    };
  
    return (
      <div style={styles.mainCont} className='modal-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a style={styles.link} href={content[2]} target='_blank' rel='noreferrer'>
          <div style={styles.container}>
            <img src={content[0]} alt='label' style={styles.icon} />
            <span style={styles.text} className='H5 Plex'>{content[1]}</span>
          </div>
        </a>
      </div>
    );
  }

export default LinkButton
