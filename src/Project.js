import { useParams } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Details from './components/details';

function Project() {
    const prjName = useParams();
    
    if (prjName.projectId === 'Predicting pollution level with an LSTM model') {
         console.log(prjName.projectId); }
    else if (prjName.projectId === 'Analysing Prison sentence data in Europe') {
        console.log(prjName.projectId); }
    else if (prjName.projectId === 'Database design and Query construction for citations in academic publications') {
        console.log(prjName.projectId); }
    else if (prjName.projectId === 'Data Visualisation of NFT commerce') {
        console.log(prjName.projectId); }
    else if (prjName.projectId === 'Gamifying cultural heritage through Linked Open Data') {
        console.log(prjName.projectId); }
    else if (prjName.projectId === "Network Analysis Of YouTube's Recomendation System From It's Early Years") {
        console.log(prjName.projectId); }
    else if (prjName.projectId === "Building Knowledge Graphs from a stoics's dairy") {
        console.log(prjName.projectId); }
    else if (prjName.projectId === "Master's Thesis: Frame Semantic Parsing using Pretrained language models and Graph encoders.") {
        console.log(prjName.projectId); }
    
    const styles ={
        mainGrid:{
            paddingTop:'8rem',
            paddingLeft:'1rem',
        }
    }

    return (
        <>
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <div className='main-grid' style={styles.mainGrid}>
                    <span className='H2 Erode'>{prjName.projectId}</span>
                    <Details content={prjName.projectId} />
                </div>
            </main>
            <Footer content={'This is the footer'}/>
        </div>
        </>
    )
}

export default Project