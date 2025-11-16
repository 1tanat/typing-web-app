import React, { useEffect, useState, useCallback } from 'react';
import './App.css'
// import { motion } from 'motion/react'
import { faker } from '@faker-js/faker'
import { TimeChoicePanel } from './components/TimeChoicePanel';
import { Timer } from './components/Timer';
import { useTyped } from './hooks/useTyped';
import { Typing } from './components/Typing';
import Results from './components/Results';

function App() {
    const generateWords = useCallback(() => faker.word.words(100), []);
    const [text, setText] = useState(generateWords);
    const [timeOption, setTimeOption] = useState<number | null>(null);
    const [timeIsChosen, setTimeIsChosen] = useState(false);
    const [testFinished, setTestFinished] = useState(false);
    const { typed, clearTyped } = useTyped();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        setText(generateWords());
        clearTyped();
        setTestFinished(false);
    };

    const handleTestFinished = useCallback(() => {
        setTestFinished(true);
    }, []);

    const handleRetryFromResults = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.blur();
        setText(generateWords());
        clearTyped();
        setTestFinished(false);
        setTimeIsChosen(false);
        setTimeOption(null);
    };

    useEffect(() => {
        if (timeOption !== null) {
            setTimeIsChosen(true);
        }
    }, [timeOption]);

    return (
        <div className='grid place-items-center'>
        {
            testFinished ?
                <Results onRetry={handleRetryFromResults} userTyped={typed} correctText={text} timeUsed={timeOption!} />
                :
                timeIsChosen ? 
                    <>
                        <Timer timeOption={timeOption!} onFinished={handleTestFinished}/>
                        <div className='relative text-3xl leading-relaxed mx-30 my-10'>
                            {text}
                            <Typing userWords={typed} words={text}/>
                        </div>
                        <div>
                            <button type="button" className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 active:from-violet-600 active:to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300" onClick={handleClick}>RETRY</button>
                        </div>
                    </>
                    :
                    <TimeChoicePanel setTimeOption={setTimeOption} />
        }
        </div>
    )
}

export default App
