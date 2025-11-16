import Caret from "./Caret";

export const Typing = ({userWords, words} : {userWords: string; words: string}) => {
    const charArr = userWords.split("");

    return (
        <div className="absolute inset-0">
            {charArr.map((userChar, index) => (
                <Character key={index} userChar={userChar} char={words[index]}/>
            ))}
            <Caret />
        </div>
    )
}

const Character = ({ userChar, char } : { userChar: string; char: string;}) => {
    const isCorrect = userChar === char;
    const isWhiteSpace = char === " ";

    return (
    <span
        className={
            !isCorrect && !isWhiteSpace
            ? "text-red-500"
            : isCorrect && !isWhiteSpace
            ? "text-green-300"
            : !isCorrect && isWhiteSpace
            ? "bg-red-500/50"
            : ""
        }
    >
        {char}
    </span>
    );
}

export default Typing;