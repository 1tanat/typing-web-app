import { useEffect, useState } from "react"

export const useTyped = () => {
    const [typed, setTyped] = useState("");
    console.log(typed);
    

    const clearTyped = () => {
        setTyped("");
    }

    useEffect(() => {
        const handleKeyboard = (event: KeyboardEvent) => {
            
            if (event.key === 'Backspace') {
                setTyped(prev => prev.slice(0, Math.max(0, prev.length - 1)));
                return;
            }

            if (event.key.length === 1) {
                setTyped(prev => prev + event.key);
            }
        }

        window.addEventListener("keydown", handleKeyboard);
        return () => window.removeEventListener("keydown", handleKeyboard);
    }, [])

    return {
        typed,
        clearTyped,
    }
}