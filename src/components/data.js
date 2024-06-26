import React from 'react'
import '../App.css';

import LinkButton from './linkButton';
import Tag from './tagButton';
import websiteIcon from '../images/icons8-website-48.png'
import githubSVG from '../images/icons8-github-ios-16-glyph/icons8-github-90.svg'

function fetchData (name){
    var abstract = '';
    var tags = '';
    var buttons = '';

    if (name === 'Predicting pollution level with an LSTM model') {
        abstract = <>This project was done as as an end-of-course project for the "Machine Learning systems for Data Science" course of the Master Degree in Digital Humanities and Digital Knowledge of the University of Bologna, held by professors Stefano Lodi and Elisabetta Ronchieri.<br/><br/>The purpose of the project is to replicate the work process used for the case study in the research paper "Prediction of air quality in Jakarta during the COVID-19 outbreak using long short-term memory machine learning" by Wihayati and F W Wibowo 2021 IOP Conf. Ser.: Earth Environ. Sci. 704 012046.<br/><br/>The data used in the project was provided by the professor and the links to the data source and other information about the project can be found on the project repository.</> ;
        tags = ['Building & Training ML Model','Python','Documentation','Tensorflow','Univariate Prediction','Data Cleaning','Data Analysis','Visualising training loss'] 
        buttons = [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/ML_LSTM_Timeseries']} key={1}/>,]
    }
    else if (name === 'Analysing Prison sentence data in Europe') {
       abstract = <>"Bars Behind Bars" is a project developed for final exam of the Open Access and Digital Ethics course of the Master’s degree in Digital Humanities and Digital Knowledge of the University of Bologna. The project aims at analysing the impact of different factors in the context of suicide in prisons across Europe.<br/><br/>The project website works as a documentation of the process leading from the choice of the datasets along with their ethical, technological, legal, and qualitative analyses, to the visualisation of the results.<br/><br/>The technical documentation is provided as Jupyter Notebook which can be downloaded from the Github.</>; 
       tags = ['Data Cleaning','Data Analysis','Python','JavaScript','Data Visualisation','Documentation','Publishing Open Data','Data Ethics'];
       buttons =[<LinkButton content={[githubSVG,'Project Repository','https://github.com/Prisoner-s-Dilemma/BarsBehindBars']} key={1}/>,
       <LinkButton content={[websiteIcon,'Project Website','https://prisoner-s-dilemma.github.io/BarsBehindBars/']} key={2}/>]}
    else if (name === 'Database design and Query construction for citations in academic publications') {
       abstract = <>This was the final Project delivered for the "Data Science" course ("Computational Management of Data") taught by Silvio Peroni @ University of Bologna, MA "DHDK". <br/><br/>The goal of the project is to develop a software that enables one to process data stored in different formats and to upload them into two distinct databases to query these databases simultaneously according to predefined operations. The software must be accompanied by a document (i.e., a Jupyter notebook) describing the data to process (their main characteristics and possible issues) and how the software has been organised (name of the files, where have been defined the various Python classes, etc.). The required structure of the database as well as its required functioning queries were provided by the professor as a UML model and we had to construct it in python.<br/><br/>The documentation and our final code can be found in the project repository on Github link provided below.</>;
       tags = ['Object Oriented Programming','Python','SQLite Database Design','Graph Database Design','Query Writing','Data Analysis','Software Design','Pandas'];
       buttons =[<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/dsORMA']} key={1}/>]}
    else if (name === 'Data Visualisation of NFT commerce') {
       abstract = <>NFT-iness project is an attempt at exploration of the activity on the Ethereum non-fungible token (NFT) market from 2017 and early 2023 constructed from the API of Etherscan. <br/><br/>We have consider the following questions:<ul><li>Who owns NFTs on the Ethereum blockchain?</li> <li>Are NFTs being traded in a bubble?</li></ul> We explore this idea in the "commerce of NFT" section of the website. What are the trends in NFT market? What is the growth pattern of this market? We explore this idea in the "trends in NFT" section of the project website.<br/><br/> The aim was to scrape data of NFT transactions and visualise them in suitable manner to see under-lying patterns which could help provide answers to the above listed questions.</>; 
       tags = ['Data Visualisation','Data Cleaning & Analysis','Website development','Javascript','Bootstrap'];
       buttons = [<LinkButton content={[githubSVG,'Project Repository','https://github.com/NFT-iness/New_NFT_Project']} key={1}/>,
       <LinkButton content={[websiteIcon,'Project Website','https://nft-iness.github.io/New_NFT_Project/']} key={2}/>]}
    else if (name === 'Gamifying cultural heritage through Linked Open Data') {
       abstract = <>This project was made as the final result of the Laboratory held by Prof. Francesa Tomassi @University of Bologna, MA "DHDK". The laboratory was organized in a cycle of practical activities related to the DH domain, in order to enhance skills and competences in managing cultural data by mixing and merging tools, tecniques and applications. <br/><br/>The topics dealt with during this project were related to: <br/><ul><li>modelling with Unreal Engine</li> <li>designing virtual environments with Blender</li><li> tools and tecniques for digital storytelling and electronic publishing</li> <li>principles of project management experiences and practices in DH domain.</li></ul> My project focused specificly upon 3D modelling with Unreal Enginer and Blender with story-telling through gamification. The Duration of the lab only allowed for a quicky prototype to get some hands on experiences. The details of the project can be found in the presentation linked below.</>; 
       tags = ['Unreal Engine','3D modelling','Blender','Gamification','Game design'];
       buttons = [<LinkButton content={[websiteIcon,'Project Presentation','https://docs.google.com/presentation/d/1hrY0EupX9_frQnf_n3zjZtMkKDvC_SKJARGbko_uvRc/edit?usp=sharing']} key={1}/>]}
    else if (name === "Network Analysis Of YouTube's Recomendation System From It's Early Years") {
       abstract = <>The purpose of the project is to conduct a network analysis in the field of digital media studies. In particular, we aim to analyze the YouTube video recommendation system of the years 2007 and 2008 as a system of recommendation for non-signed-in users, based on “popularity” and relatedness of content, rather than on the personalization from previous activity on the website.<br/><br/> Our idea is to investigate the non-personalized architectural space of the recommendation system of YouTube, in its early years, so as to be able to infer some general patterns in the way it historically made connections between videos, in terms of their relatedness. As such, our study pertains to a specific historical analysis of YouTube’s algorithm: concentrating on its network of contents, beyond the differentiated personalization of the recommendation algorithm.</>; 
       tags = ['Network Building',"Measuring Network's Properties",'Network Visualisation In Gephi','Network Building from Raw Data','Statistical Analysis of Data'];
       buttons = [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/Youtube_video_networkAnalysis']} key={1}/>,
       <LinkButton content={[websiteIcon,'Project Report','https://docs.google.com/document/d/1ef9MOGB_F7hGza6ANUF1KRqpzAHytLSGwEG4r5_K8WI/edit?usp=sharing']} key={2}/>];}
    else if (name === "Building Knowledge Graphs from a stoics's dairy") {
       abstract = <>"OntoMeditations" is a Knowledge Representation and Knowledge Extraction (KRKE) course project, made as part of the Digital Humanities and Digital Knowledge (DHDK) program of the Università di Bologna. <br/><br/>Engaged with Marcus Aurelius’ Meditations, a major work of Stoic philosophy, our project uses linguistic and sentiment analysis digital techniques applied to a dedicated ontology. The aim is to read and understand this rich philosophical work, as well as its iconic author-emperor-thinker-feeler, in novel ways, through digital lights.<br/><br/> We created an onotology for Representing the knowledge extracted from the raw text of the book which includes the different ideas and concepts discussed and made it queriable by embedding this information in a knowledge graph which was followed the logic of the onotology created.</>; 
       tags = ['Ontology Building','Sentiment Analysis','Graph Database design','Knowledge Graph design','Query Design In SPARQL','Website Design','Knowledge Extraction','Data Processing In Python'];
       buttons = [<LinkButton content={[githubSVG,'Project Repository','https://github.com/ONTOmeditations/OntoMeditations']} key={1}/>,
       <LinkButton content={[websiteIcon,'Project Website','https://ontomeditations.github.io/OntoMeditations/']} key={2}/>];}
    else if (name === "Master's Thesis: Frame Semantic Parsing using Pretrained language models and Graph encoders.") {
       abstract = <>This thesis delves into the realm of computational semantics and explores the optimization of semantic parsing systems,driven by the increasing demand for sophisticated natural language processing(NLP)technologies in applications like question-answer systems and dialogue systems, including platforms such as ChatGPT.<br/><br/>Motivated by the need to enhance the performance of AI systems and mitigate biases and miscommunications the study focuses on deep-learning-based semantic parsing, aiming to optimize it’s expressivity and performance through hyper-parameter tuning and experimentation with components such as language models. <br/><br/>This research work investigates the potential benefits of using larger architecture language models and fine-tuned graph embedding generators Leveraging a frame identification system combining the prowess of modern language model and AdaptiveGraphEncoder,the study systematically explores the impact of hyper-parameter tuning and component replacements on system performance.<br/><br/> Meticulous experimentation and performance evaluation were performed to garner insights into the system’s robustness, efficiency, and adaptability are gained, informing future optimizations in frame identification using deeplearning methods.</>; 
       tags = ['Computational semantics', 'Semantic parsing', 'Natural language processing', 'Deep learning', 'Hyper-parameter tuning','Languagemodels', 'Frame identification', 'Graph embeddings', 'Performance evaluation'];
       buttons =[<LinkButton content={[githubSVG,'Project Repository','https://github.com/ManuSrivastava1/FrameSemanticParser']} key={1}/>]}
    
    return {'a':abstract,'b':tags,'c':buttons}
}

function Abstract (name){
    //console.log('this is the print from the data.js -',name['content']['content']);
    //console.log(data['a'])
    const id = name['content'];
    var data = fetchData(id);
    
    return (
        <>{data['a']}</>
    )
}

function Tags (name){
    //console.log(data['b']);
    const id = name['content'];
    var data = fetchData(id);
    //<>{data['b']}</>
    const tagComponents = [];
    console.log(data['b'].length,typeof data['b']);
    for (let i = 0; i < data['b'].length; i++) {
         console.log('Loop iteration:', i);
        tagComponents.push((<Tag key={i} content={data['b'][i]} />))
      }
    return (
        <>
          {tagComponents}  
        </>
    );
}

function Buttons (name){
    const id = name['content'];
    var data = fetchData(id);

    return(
        <>
        {data['c']}
        </>
    )
}

export {Abstract, Tags, Buttons}