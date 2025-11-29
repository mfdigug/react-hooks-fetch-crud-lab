import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questionData) => setQuestions(questionData))
  }, [])

    function handleAddQuestion(newQuestionData) {
      const updatedQuestionList = [...questions, newQuestionData]
      setQuestions(updatedQuestionList)
    }

    function handleDeleteQuestion(id){
      const updatedQuestionList = questions.filter((question) => id !== question.id)
      setQuestions(updatedQuestionList)
    }

    function handleAnswerChange(id, correctIndex){
      fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correctIndex: correctIndex})
      })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        const updatedQuestionList = questions.map((question) => {
          if (question.id === updatedQuestion.id){
            return updatedQuestion
          } else {
            return question
          }
        })
        setQuestions(updatedQuestionList)
      })
    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onHandleDelete={handleDeleteQuestion} onHandleAnswerChange={handleAnswerChange}/>}
    </main>
  );
}

export default App;
