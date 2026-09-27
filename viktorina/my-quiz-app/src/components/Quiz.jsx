import QuestionContents from "./QuestionContents"
import Button from "./Button"
import QuizInfo from "./QuizIfno"
import { useState, useEffect, useCallback } from "react"
import Result from "./Result"

const questions = [
    { id: crypto?.randomUUID(), title: 'Сколько будет 7 × 8?', options: [54, 56, 58, 64], correct: 56 },
    { id: crypto?.randomUUID(), title: 'Сколько будет 15% от 200?', options: [15, 20, 30, 45], correct: 30 },
    { id: crypto?.randomUUID(), title: 'Чему равно 2⁵?', options: [10, 16, 25, 32], correct: 32 },
    { id: crypto?.randomUUID(), title: 'Решите уравнение: 3x + 7 = 22. Чему равен x?', options: [3, 4, 5, 6], correct: 5 }
]

const Quiz = () => {
    const [currentCount, setCurrentCount] = useState(() => {
        const saved = Number(localStorage.getItem('currentCount'))
        return Number.isFinite(saved) && saved > 0 && saved <= questions.length ? saved : 1
    })

    const [score, setScore] = useState(() => {
        const saved = Number(localStorage.getItem('score'))
        return Number.isFinite(saved) && saved >= 0 ? saved : 0
    })

    const [isFinished, setIsFinished] = useState(() => {
        return localStorage.getItem('isFinished') === 'true'
    })

    const [selected, setSelected] = useState(() => {
        const saved = localStorage.getItem('selected')
        if (!saved) return null
        try {
            return JSON.parse(saved)
        } catch {
            return null
        }
    })

    useEffect(() => {
        localStorage.setItem('currentCount', currentCount)
    }, [currentCount])

    useEffect(() => {
        localStorage.setItem('score', score)
    }, [score])

    useEffect(() => {
        localStorage.setItem('isFinished', isFinished)
    }, [isFinished])

    useEffect(() => {
        if (selected === null) {
            localStorage.removeItem('selected')
        } else {
            localStorage.setItem('selected', JSON.stringify(selected))
        }
    }, [selected])

    const upCount = useCallback(() => {
        if (currentCount === questions.length) {
            setIsFinished(true)
            return
        }
        setCurrentCount(count => count + 1)
        setSelected(null)
    }, [currentCount])

    const handleAnswer = useCallback((option, correct) => {
        if (selected !== null) return
        setSelected(option)
        if (option === correct) {
            setScore(score => score + 1)
        }
    }, [selected])

    const restart = useCallback(() => {
        setIsFinished(false)
        setCurrentCount(1)
        setScore(0)
        setSelected(null)
        localStorage.removeItem('currentCount')
        localStorage.removeItem('score')
        localStorage.removeItem('isFinished')
        localStorage.removeItem('selected')
    }, [])

    return (
        <div>
            <div className={`quiz-card ${isFinished ? 'hide' : ''}`}>
                <QuizInfo
                    allcount={questions.length}
                    currentCount={currentCount}
                    score={score}
                />
                <QuestionContents
                    title={questions[currentCount - 1].title}
                    options={questions[currentCount - 1].options}
                    correct={questions[currentCount - 1].correct}
                    selected={selected}
                    handleAnswer={handleAnswer}
                />
                <Button upCount={upCount} text='Дальше' />
            </div>
            <Result
                isFinished={isFinished}
                score={score}
                allcount={questions.length}
                restart={restart}
            />
        </div>
    )
}

export default Quiz