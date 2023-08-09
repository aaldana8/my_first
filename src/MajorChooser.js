import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//using font awesome library
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';//using font awesome library
import { availableMajors, questionsToAsk } from './majorsData.js';//importing questions/majors from majorData.js
import React, { useState } from 'react';// import useState from react for reselect/pickMaj/ansQuestion
import { motion } from 'framer-motion';
import './MajorChooser.css';

const MajorChooser = () => {

  const getHighestAffinityMajor = () => {
    // Sort majors list, give precedence to item with higher affinity
    // NOTE: If affinities are equal, precedence goes to item1
    availableMajors.sort((item1, item2) => (item1.affinity >= item2.affinity) ? -1 : 1);

    // DEBUG: Remove before final verification
    console.log(availableMajors);

  return availableMajors[0];};     

  // Update current affinity score depending on answer received from current question
  // If user answered yes, affinities increase; responding no decreases affinities
  const updateAffinities = (uinput) => {
    // DEBUG: Remove before final verification
    console.log(`updateAffinities(): uinput=${uinput}`)
    
      if (uinput) {
        availableMajors.forEach((majorItem) => {
          console.log(`major=${majorItem.name}`);
          majorItem.affinity += questionsToAsk[currentQuestion].weights[majorItem.id - 1]
          console.log(`affinity=${majorItem.affinity}`);
        });
      } else {
        availableMajors.forEach((majorItem) => {
          console.log(`major=${majorItem.name}`);
          majorItem.affinity -= questionsToAsk[currentQuestion].weights[majorItem.id - 1]
          console.log(`affinity=${majorItem.affinity}`);
        });
      }
  }

  // Usage of state hooks below / react

  // Holds currently selected major
  const [choseMaj, setchoseMaj] = useState(null);
  // Holds the index of the current question I'm on
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Holds user answers to questions
  const [answer, setAnswer] = useState(false);  // TODO: Decide whether true, false, or null should be initial state

  // Whenever I click a function, these reset the selections
  const reSelect = () => {
    setchoseMaj(null);
    setCurrentQuestion(0);
    setAnswer(false);  // TODO: See state hook definition
    // TODO: Reset all major affinities. Currently, subsequent quiz attempts will cause previous affinities to carry over
  };
  
  //Reset the choseMaj, curr index, and answer array
  const pickMaj = (majorItem) => {
    setchoseMaj(majorItem);
  }
 
  // Called when either yes or no button is clicked
  // yes = true; no = false
  const answerQuestion = (uinput) => {
    setAnswer(uinput);
    // DEBUG: Remove before final verification
    console.log(`answerQuestion(): answer=${answer}`);
    // Update affinities every time yes or no is clicked
    updateAffinities(uinput);
    setCurrentQuestion(currentQuestion+1);
  };

  // Rendering the content based on the state

  //QUESTION BOX
  const renderContent=()=>{
    if(questionsToAsk.length>currentQuestion){ return(
        <motion.div
        beginingg={{opacity:0,y:-20 }}
        alivee={{opacity:1,y:0 }}
        movingprt={{duration:0.5 }}
        className="quest-box"
      >
       <h2 className="quest-text"><FontAwesomeIcon icon={faCheckCircle} className="question-icon" />{questionsToAsk[currentQuestion].text} </h2>
       <div className="ans-push">
       <button className="ans-but" type="button" onClick={()=>answerQuestion(true)}>YES</button><button className="ans-but" type="button" onClick={()=>answerQuestion(false)}>NO</button></div>
        </motion.div>
  // Rendering content based on the state
      
  );

  //Do logic and set recommended major
  }else{const recommendedMajor=getHighestAffinityMajor();
      return(
  //POST QUESTION BOX
  //POST QUESTION BOX
  //RESET BUTTON
        <motion.div //animation framer
        beg={{opacity:0,y:-20}}alive={{opacity:1,y: 0}}movingprt={{duration:0.5}}
  className="rec-maj-box">
  <h2 className="rec-maj-name">Major Simulation Result:</h2>
  <h3 className="rec-maj-name">{recommendedMajor.name}</h3>
  <p className="rec-maj-desc">{recommendedMajor.description}</p>
  <button className="resetb" onClick={reSelect}>Attempt Again</button>
        </motion.div>);}};

  return(

// Overall interface
<div className="major-chooser">
<div className="topofpage">
<h1 className="title">Choosing Your Major</h1></div>
<div className="container">
<div className="prog-cont"></div>
{renderContent()}
<ul className="majs-list">
{availableMajors.map((majorItem)=>(
      <motion.li
      beg={{opacity:0,x:-20 }} alive={{ opacity:1,x:0 }}movingprt={{duration:0.5}}onClick={()=>pickMaj(majorItem)}
      className={`major-Na ${choseMaj===majorItem?'selected':''}`}>
      <span className="major-name">{majorItem.name}</span> 
      {choseMaj===majorItem&&<FontAwesomeIcon icon={faCheckCircle}className="check-icon"/>}
      </motion.li>))}
        </ul>
        {choseMaj&&(
  // OUR 
      <motion.div
      beginingg={{opacity:0,y:-20 }}alivee={{opacity:1,y:0}}movingprt={{duration:0.5}}
      className="click-box">
      <h2 className="click-name">Selected Major:</h2>
      <h3 className="click-name">{choseMaj.name}</h3>
      <p className="click-description">{choseMaj.description}</p>
      </motion.div>
        )} </div></div>);};

export default MajorChooser;
