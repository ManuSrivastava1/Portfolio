import React from 'react'
import { useState } from 'react';

import ModalGrid from './modal_grid';

function ProjectCard({content}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave =() => {
        setIsHovered(false);
    };

    // const color = content[2]
    const styles = {
        card:{
            // width:'min(450px, 30vw)',
            height:'max(250px, calc(0.6 * min(450px, 30vw)))',
            border: isHovered? '1px solid':'0.5px solid',
            gridColumn: 'auto / span 4',
            borderColor: isHovered? 'rgba(43,49,47,1)': 'rgba(43,49,47,0.2)',
        },
        cardHeader:{
            width: '60%',
            height:'60%',
            padding:'1.5rem',
        },
        cardBody:{
            padding:'0rem 1.5rem 0rem 1.5rem',
        },
        clickableText:{
            cursor: 'pointer',
            color: isHovered? 'rgba(43,49,47,1)': 'rgba(43,49,47,0.2)',
        },
        modalContainer: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity to control the blur intensity
            display: isModalOpen ? 'flex' : 'none',
          },
          modalContent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#D9D9D9',
            padding: '20px',
            width:'80vw',
            height:'80vh',
          },
    }

    const handleClickable = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
      };
    
      const handleModalClose = (e) => {
        if (e.target.classList.contains('modalSpace')) {
            // Do nothing if the click is within the modal content
            return;
          }
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
      };

    return (
        <>
            <div style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClickable}>
                <div className='cardHeader' style={styles.cardHeader}>
                    <span className='H3 Erode'>{content[0]}</span>
                </div>
                <div className='cardBody' style={styles.cardBody}>
                    
                    <span className='Btext2 Plex' style={styles.clickableText}>Click To View More ↗</span>
                </div>
            </div>
            
            {isModalOpen && (
                <div style={styles.modalContainer} onClick={handleModalClose}>
                <div className='modalSpace' style={styles.modalContent}>
                    {/* Add modal content here */}
                    <ModalGrid content={content[0]} />
                </div>
                </div>
            )}
        </>
    )
}



export default ProjectCard
