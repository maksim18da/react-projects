import { memo } from "react"
const Result = (props) =>{
    console.log('Result')
    const{
        isFinished,
        score,
        allcount,
        restart,
    } = props
    return(   
    <div className={`result-card ${isFinished ? 'active' : ''}`}>
        <p className="result-title">Ваш результат</p>
        <p className="result-score">{score} / {allcount}</p>
        <button className="btn-restart" onClick={restart}>Пройти заново</button>
    </div>
    )
}
export default memo(Result)