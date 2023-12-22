import React from "react";
import '../App.css'
import {useState} from "react";
import Axios from 'axios';


// "Add question" button can add question after the last question on the database. 
// And then, It is required to click "Update questions" button to check if the question is added on the database.
// If you click "Update questions" button it will show you all questiones those are stored in the database from mySQL server.
// Also, you can see "Update" and "Delete" button if you click "Update questions" button.
// As well, it is also required to click "Update questions" button to check if the database updated or not.

//How to check the database:
//On the website, need to turn on the Inspect(keyboard F12)
//Whenever clicking "Update questions" button, there should be one updated.
// Drop down the Axios list, and then click "data"

function Addquestion() {

  const [text, setText] = useState("");
  const [newText, setNewText] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  

    const addQuestion = () => {
      Axios.post("http://localhost:3002/create",{
            text: text,

        }).then(()=> {
            setQuestionList([...questionList,{ //
          text: text,
        },
      ]);

        });
    };

    const getQuestion = () => {
      Axios.get("http://localhost:3002/questions").then((response) => {
        setQuestionList(response.data);
        console.log(response);
      });
    };

    const updateQuestion = (id) => {
      Axios.put("http://localhost:3002/update", { text: newText, id: id }).then(
        (response) => {
          setQuestionList(
            questionList.map((val) => {
              return val.id === id
                ? {
                    id: val.id,
                    text: val.text,
                  }
                : val;
            })
          );
        }
      );
    };

    const deleteQuestion = (id) => {
      Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
        setQuestionList(
          questionList.filter((val) => {
            return val.id !== id;
          })
        );
      });
    };


  return (
    <div className = "Addquestion">
      <div className ="information">
        <label>More Question:</label>
        <input text = "text" onChange={(event) => {
          setText(event.target.value);
          }}
          />
        <button onClick={addQuestion}>Add question</button>
      </div>

      <div className="questions">
        <button onClick={getQuestion}>Update questions</button>
        
        {questionList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Question: {val.text}</h3>
              </div>
              <div>
                <input type="text"
                    placeholder="..."
                    onChange={(event) => {
                      setNewText(event.target.value);
                    }}
                />
                <button onClick={() => {updateQuestion(val.id);}}>{" "}Update</button>
                <button onClick={() => { deleteQuestion(val.id);}}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Addquestion;