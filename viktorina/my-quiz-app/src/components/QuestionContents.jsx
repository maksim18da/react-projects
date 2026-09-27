import { memo } from "react"
const QuestionContents = (props) =>{
    console.log('QuestionContents')
    const{
        title,
        options,
        correct,
        selected,
        handleAnswer,
    } = props
    return(
        <div className="question__contents">
            <h2 className="question-title">{title}</h2>
            <div className="options">
                {/* при правильно ответе добавляем класс correct */}
                {/* при правильно ответе добавляем класс wrong */}
                {options.map((option)=>{
                    return(
                        <div className={`option ${selected === option ? (option === correct ? 'correct' : 'wrong') : ''}`} key={option} onClick={()=>handleAnswer(option,correct)}>
                            <span>{option}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default memo(QuestionContents)