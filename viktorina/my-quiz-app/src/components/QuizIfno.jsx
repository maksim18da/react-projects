import { memo } from "react"
const QuizInfo = (props) =>{
    console.log('QuizInfo')
    const{
        currentCount,
        allcount,
        score,
    } = props
    return(
        <div className="quiz-top">
            <span>Вопрос {currentCount} из {allcount}</span>
            <span className="quiz-score">Счёт: {score}</span>
        </div>
    )
}
export default memo(QuizInfo)