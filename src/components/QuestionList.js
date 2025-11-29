
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onHandleDelete}) {

  console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem 
          key={question.id}
          question={question}
          onHandleDelete={onHandleDelete}
        />
      })}
    </ul>
    </section>
  );
}

export default QuestionList;
