export function Question({question, handleUsersChoice}) {
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => {handleUsersChoice(index)}}>{option.text}</button>
      ))}
    </div>
  )
}