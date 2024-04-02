import React from 'react'
import '../App.css';
import {Abstract, Tags, Buttons} from './data';


function Details(name){
    //console.log(typeof name);
    /*
    for (const key in name) {
        if (Object.hasOwnProperty.call(name, key)) {
          // Log the property name and its corresponding value
          console.log(`${key}: ${name[key]}`);
        }
      }
    */
    console.log('this is the print from the details.js -',name['content']);
    return (
        <div className='main-grid' style={styles.mainGrid}>
            <div style={styles.details}>
                <p className='H5'>Abstract</p>
                <div style={styles.te}>
                    <Abstract content={name['content']}/>
                    <p className='H5' style={styles.te}>Related Hyper-Links</p>
                    <Buttons content={name['content']}/>
                </div>
            </div>
            
            <div style={styles.Tag}>
                <p className='H5'>Key Learnings</p>
                <div style={styles.te}>
                    <Tags content={name['content']}/>
                </div>
            </div>
        </div>
    )
}

const styles ={
    mainGrid:{
        paddingTop:'4rem',
        display:'grid',
        gridTemplateColumns:'repeat(2, 1fr)',
        gridColumnGap:'16px',
    },
    details:{
        gridColumn: '1/2',
    },
    Tag:{
        gridColumn: '2/2',
    },
    te:{
        paddingTop:'1rem',
    },
}

export default Details