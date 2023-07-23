import React,{ useState } from 'react'

import '../App.css'

function TagButton({ content }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const styles = {
    tag: {
      
      borderRadius: '24pt',
      height: '24pt',
      paddingLeft: '16pt',
      paddingRight: '16pt',
      margin: '0pt 8pt 8pt 8pt',
      lineHeight: '32px',
      transition: 'background-color 0.3s, border-color 0.3s',
      cursor: 'crosshair',

      backgroundColor: isHovered ? 'lightblue' : 'transparent',
      borderColor: isHovered ? 'blue' : 'black',

      border: isClicked? '2px solid grey': '1px solid black',

    },
    clickedtag:{
      color:isClicked? 'black':'#090EC6',
    }
  };

  return (
    <div
      className='tagButton'
      style={styles.tag}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <p className='H3' style={styles.clickedtag}>{content}</p>
    </div>
  );

}

export default TagButton;
