import React from 'react'

function LinkButton({ content }) {
    const styles = {
      container: {
        display: 'flex',
        height: '3rem',
        border: '2px solid black',
        width: '12rem',
        justifyContent: 'center',
        alignItems: 'center', // Vertically align the items
        padding: '0.25rem 0.25rem',
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
      }
    };
  
    return (
      <div style={styles.mainCont} className='modal-button'>
        <a href={content[2]} target='_blank' rel='noreferrer'>
          <div style={styles.container}>
            <img src={content[0]} alt='label' style={styles.icon} />
            <span className='H5 Plex'>{content[1]}</span>
          </div>
        </a>
      </div>
    );
  }

export default LinkButton
