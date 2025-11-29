
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteClick, onHandleAnswerChange}) {

  console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem 
          key={question.id}
          question={question}
          onDeleteClick={onDeleteClick}
          onHandleAnswerChange={onHandleAnswerChange}
        />
      })}
    </ul>
    </section>
  );
}

export default QuestionList;
