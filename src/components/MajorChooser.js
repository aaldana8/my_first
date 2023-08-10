import React,{useState}from'react';// import useState from react for reselect/pickMaj/ansQuestion
import{FontAwesomeIcon}from'@fortawesome/react-fontawesome';//using font awesome library
import{faCheckCircle}from'@fortawesome/free-solid-svg-icons';//using font awesome library
import{availableMajors,questionsToAsk}from '../Data/majorsData.js';//importing questions/majors from majorData.js
import{motion}from'framer-motion';


const MajorChooser=()=>{
  const majLogic=()=>{

    //logic Stage
    const scoreBoard=availableMajors.map((majorItem) => {
      let pointz=0;
      if(majorItem.name==='Business Admin'&&uinput[2]==='yes'){pointz=pointz+2;}
      if(majorItem.name==='Computer Science'&&uinput[0]==='yes'){pointz=pointz+2;}
      if(majorItem.name==='Psychology'&&uinput[1]==='yes'){pointz=pointz+2;}
      return{majorItem,pointz};});
       scoreBoard.sort((test1, test2)=>test2.pointz-test1.pointz);return scoreBoard[0].majorItem;};     

  // Usage of state hooks below / react

  // Holds currently selected major
  const[choseMaj,setchoseMaj]=useState(null);
  // Holds the index of the current question I'm on
  const[currentQuestion,setCurrentQuestion]=useState(0);
  // Holds user answers to questions
  const[uinput,setAnswers]=useState([]);
  // Whenever I click a function, these reset the selections
  const reSelect=()=>{setchoseMaj(null);setCurrentQuestion(0);setAnswers([]) };
  //Reset the choseMaj, curr index, and answer array
  const pickMaj=(majorItem)=>{setchoseMaj(majorItem);};
  //
  const answerQuestion=(uinput)=>{setAnswers([...uinput,uinput]);setCurrentQuestion(currentQuestion+1);};


  // Rendering the content based on the state

  //QUESTION BOX //container
  
  const renderContent=()=>{

    if(questionsToAsk.length>currentQuestion){  
    
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
       <button className="ans-but" onClick={()=>answerQuestion('yes')}>YES</button><button className="ans-but" onClick={()=>answerQuestion('no')}>NO</button></div>
        </motion.div>
        </div>
  // Rendering content based on the state
  );

  //Do logic and set recommended major
  }else{const recommendedMajor=majLogic();    //결과창 : 질문이 다 대답함
      return(
  //POST QUESTION BOX
  //POST QUESTION BOX
  
  //RESET BUTTON
        <motion.div //animation framer
        beg={{opacity:0,x:10,y:-20}}alive={{opacity:1,y: 0}}movingprt={{duration:0.5}}
  className="rec-maj-box">
  <h2 className="rec-maj-name">Major Simulation Result:</h2>
  <h3 className="rec-maj-name">{recommendedMajor.name}</h3>
  <p className="rec-maj-desc">{recommendedMajor.description}</p>
  <button className="resetb" onClick={reSelect}>Attempt Again</button>
        </motion.div>);}};


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


return(
// Overall interface        //처음 기본 배경화면
<div>
  <div className="container">
  {renderContent()}


  {/* major list 표시하는 코드 */}
    <div className="ForTextPosi">
      <h2>Choose a major:</h2></div>
  <div className="majs-boxes-container">
  
    <ul className="majs-list">    
    {availableMajors.map((majorItem)=>(
          <motion.li
          beg={{opacity:0,x:-20 }} alive={{ opacity:1,x:0 }}movingprt={{duration:0.5}}onClick={()=>pickMaj(majorItem)}
          className={`major-boxes ${choseMaj===majorItem?'selected':''}`}>
          <span className="major-name">{majorItem.name}</span> 
          {choseMaj===majorItem&&<FontAwesomeIcon icon={faCheckCircle}className="check-icon"/>}
          </motion.li>))}
            </ul>
    
  </div>
  
  {choseMaj&&(
  // click a major on a website
    <motion.div
    beginingg={{opacity:0,y:-20 }}alivee={{opacity:1,y:0}}movingprt={{duration:0.5}}
    className="click-box">
      <div className='ForTextPosi'>
        <h2 className="click-name">Selected Major:</h2>
        <h3 className="click-name">{choseMaj.name}</h3>
        <p className="click-description">{choseMaj.description}</p>
      </div>
    </motion.div>
  )} 
  
  </div>
</div>);};

export default MajorChooser;
