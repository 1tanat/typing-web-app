export const TimeChoicePanel = ({setTimeOption} : {setTimeOption: (time: number) => void }) => {

    const buttonBase = "rounded-lg mx-10 px-8 py-3 text-xl font-semibold focus:outline-none transition-all duration-300 transform";

    const buttonVariants = "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 active:from-cyan-600 active:to-blue-600 hover:scale-105 active:scale-95 text-white shadow-lg hover:shadow-cyan-500/50";

    return (
        <div className="-translate-y-20 grid place-items-center">
            <div className="p-10 text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Choose Time</div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className={`${buttonBase} ${buttonVariants}`} onClick = {() => setTimeOption(30)} >30 sec</button>
                <button className={`${buttonBase} ${buttonVariants}`} onClick = {() => setTimeOption(60)}>1 min</button>
                <button className={`${buttonBase} ${buttonVariants}`} onClick = {() => setTimeOption(180)}>3 min</button>
                <button className={`${buttonBase} ${buttonVariants}`} onClick = {() => setTimeOption(300)}>5 min</button>
            </div>
        </div>
    )
}