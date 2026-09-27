import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../static/react-quiz',
        emptyOutDir: true,
        rollupOptions: {
            input: './src/main.jsx',
            output: {
                entryFileNames: 'quiz.js',
                chunkFileNames: 'quiz-[name].js',
                assetFileNames: 'quiz.[ext]'
            }
        }
    },
    base: '/static/react-quiz/'
})