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

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
