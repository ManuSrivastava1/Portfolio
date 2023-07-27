import React from 'react'

import '../App.css'

function Tag({ content }) {

  const styles = {
    tag:{
        width:'100%',
        height:'2rem',
        display: 'flex',
        alignItems: 'center',
        border:'0.5px solid rgba(43,49,47,0.2)',
        padding:'0.5rem',
  },
  };

  return (
    <div
      className='tagButton'
      style={styles.tag}>
      <span className='H5 QuestaG'>{content}</span>
    </div>
  );

}

export default Tag;
