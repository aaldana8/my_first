import React,{useState}from'react';// import useState from react for reselect/pickMaj/ansQuestion
import{FontAwesomeIcon}from'@fortawesome/react-fontawesome';//using font awesome library
import{faCheckCircle}from'@fortawesome/free-solid-svg-icons';//using font awesome library
import{availableMajors,questionsToAsk}from '../Data/majorsData.js';//importing questions/majors from majorData.js
import{motion}from'framer-motion';


/**
  * Sorts majors list by affinity and retrieves the major with highest affinity.
  * @note If affinities are equal when sorting, precedence goes to item1.
  * @function
  * @returns The major with the highest affinity score.
  */

const getHighestAffinityMajor = () => {
  availableMajors.sort((item1, item2) => (item1.affinity >= item2.affinity) ? -1 : 1);

  return availableMajors[0];
};


/**
  * Updates current affinity score depending on answer received for current question.
  * If user answered yes, affinities increase; responding no decreases affinities.
  * @function
  * @param {boolean} uinput - True if user answered yes; False for no.
  */
const updateAffinities = (uinput, currentQuestion) => {
  if (uinput) {
    availableMajors.forEach((majorItem) => {
      majorItem.affinity += questionsToAsk[currentQuestion].weights[majorItem.id - 1]
    });
  } else {
    availableMajors.forEach((majorItem) => {
      majorItem.affinity -= questionsToAsk[currentQuestion].weights[majorItem.id - 1]
    });
  }
}


/**
  * Resets major affinities to their baseline, which is 10.
  * @function
  */
const resetAffinities = () => {
  availableMajors.forEach((major) => {
    major.affinity = 10;
  });
}


const MajorChooser=()=>{

  // Major currently selected by the user
  const [choseMaj, setchoseMaj] = useState(null);

  // Holds the index of the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Holds user answers to current questions
  const [answer, setAnswer] = useState(true);

  

  /**
   * Resets quiz state when 'Attempt Again' is clicked.
   * @function
   */
  const reSelect = () => {
    setchoseMaj(null);
    setCurrentQuestion(0);
    setAnswer(false);
    resetAffinities();
  };


  /**
   * Sets the state for whichever major the user has selected from the map.
   * @function
   * @param {Object} majorItem - The currently selected major object.
   */
  const pickMaj = (majorItem) => {
    setchoseMaj(majorItem);
  }
  

  /**
   * Called when either button is selected by the user.
   * @function
   * @param {boolean} uinput - True if user answered yes; False for no.
   */
  const answerQuestion = (uinput) => {
    setAnswer(uinput);
    updateAffinities(uinput, currentQuestion);
    setCurrentQuestion(currentQuestion + 1);
  };


  // Rendering the content based on the state
  //QUESTION BOX //container
  const renderContent=()=>{
    if(questionsToAsk.length > currentQuestion){  
      return(  //질문창: 이거 질문갯수가 아직 남았을때
        <div>
          <motion.div
              beginingg={{opacity:0,y:-20 }}
              alivee={{opacity:1,y:0 }}
              movingprt={{duration:0.5 }}
              className="quest-box"
              >
            <h2 className="quest-text"><FontAwesomeIcon icon={faCheckCircle} className="question-icon" />{questionsToAsk[currentQuestion].text} </h2>
            <h3 className="quest-num">  ({currentQuestion+1}/{questionsToAsk.length}) </h3>
            <div className="ans-push">
            <button className="ans-but" type="button" onClick={() => answerQuestion(true)}>YES</button>
            <button className="ans-but" type="button" onClick={() => answerQuestion(false)}>NO</button>
            </div>
          </motion.div>
        </div>
  // Rendering content based on the state
  );

  //Do logic and set recommended major
  }else{const recommendedMajor = getHighestAffinityMajor();    //결과창 : 질문이 다 대답함
      return(
  //POST QUESTION BOX
  //POST QUESTION BOX
  
  //RESET BUTTON
      <motion.div //animation framer
        beg={{opacity:0,x:10,y:-20}}
        alive={{opacity:1,y: 0}}
        movingprt={{duration:0.5}}
        className="rec-maj-box"
      >
        <h2 className="rec-maj-name">Major Simulation Result:</h2>
        <h3 className="rec-maj-name">{recommendedMajor.name}</h3>
        <h4 className="rec-maj-college">{recommendedMajor.college}</h4>
        <p className="rec-maj-desc">{recommendedMajor.description.academics}</p>
        <button className="resetb" onClick={reSelect}>Attempt Again</button>
        </motion.div>
        );
      }
    };


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


return(
// Overall interface      
<div>
  <div className="container">
  {renderContent()}
    <div className="ForTextPosi">
      <h2>Choose a major:</h2>
    </div>
    
    <div className="majs-boxes-container">
      <ul className="majs-list">    
      {availableMajors.map((majorItem)=>(
          <motion.li
            beg={{opacity:0,x:-20 }}
            alive={{ opacity:1,x:0 }}
            movingprt={{duration:0.5}}
            onClick={()=>pickMaj(majorItem)}
            className={`major-boxes ${choseMaj===majorItem?'selected':''}`}
          >
            <span className="major-name">{majorItem.name}</span> 
            {choseMaj===majorItem&&<FontAwesomeIcon icon={faCheckCircle}className="check-icon"/>}
            </motion.li>))}
      </ul>
    
    </div>
  
  {choseMaj&&(
  // click a major on a website
    <motion.div
      beginingg={{opacity:0,y:-20 }}
      alivee={{opacity:1,y:0}}
      movingprt={{duration:0.5}}
      className="click-box"
    >
      <div className='ForTextPosi'>
        <h2 className="click-name">Selected Major:</h2>
        <h3 className="click-name">{choseMaj.name}</h3>
        <h4 className="click-name">Academics</h4>
            <p className="click-description">{choseMaj.description.academics}</p>
            <h4 className="click-name">Experience</h4>
            <p className="click-description">{choseMaj.description.experience}</p>
            <h4 className="click-name">Opportunities</h4>
            <p className="click-description">{choseMaj.description.opportunities}</p>
      </div>
    </motion.div>
  )} 
  
      </div>
    </div>
  );
};

export default MajorChooser;
