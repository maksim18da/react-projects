import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/quiz.css'

const container = document.getElementById('react-quiz-root')
if (container) {
    createRoot(container).render(<App />)
}