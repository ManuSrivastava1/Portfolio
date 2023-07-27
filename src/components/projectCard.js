import React from 'react'
import { useState } from 'react';

function ProjectCard({content}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const color = content[2]
    const styles = {
        card:{
            // width:'min(450px, 30vw)',
            height:'max(250px, calc(0.6 * min(450px, 30vw)))',
            border:'1px solid',
            gridColumn: 'auto / span 4',
            marginBottom:'16px',
            borderColor: color,
        },
        cardHeader:{
            height:'18%',
            backgroundColor: color,
            padding:'16px',
        },
        cardBody:{
            padding:'16px',
        },
        clickableText:{
            cursor: 'pointer',
            color: 'blue',
        },
        modalContainer: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity to control the blur intensity
            display: isModalOpen ? 'block' : 'none',
          },
          modalContent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            width:'70vw',
            height:'60vh',
          },
    }

    const handleClickableTextClick = () => {
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
            <div style={styles.card}>
                <div className='cardHeader' style={styles.cardHeader}>
                    <span className='H4'>{content[0]}</span>
                </div>
                <div className='cardBody' style={styles.cardBody}>
                    <span className='Btext1'>{content[1]}</span><br/><br/>
                    <span style={styles.clickableText} onClick={handleClickableTextClick}>Click To View More ↗</span>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div style={styles.modalContainer} onClick={handleModalClose}>
                <div className='modalSpace' style={styles.modalContent}>
                    {/* Add modal content here */}
                    <h2>Modal Content</h2>
                    <p>Here's the modal content...</p>
                </div>
                </div>
            )}
        </>
    )
}



export default ProjectCard
