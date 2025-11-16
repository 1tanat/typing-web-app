import { motion } from "framer-motion";

interface ResultsProps {
  onRetry: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userTyped: string;
  correctText: string;
  timeUsed: number;
}

const Results = ({ onRetry, userTyped, correctText, timeUsed }: ResultsProps) => {
  // Calculate accuracy
  const correctChars = userTyped.split("").filter((char, index) => char === correctText[index]).length;
  const accuracy = correctText.length > 0 ? Math.round((correctChars / correctText.length) * 100) : 0;
  
  // Calculate WPM (Words Per Minute)
  // Average word length is 5 characters
  const words = correctChars / 5;
  const minutes = timeUsed / 60;
  const wpm = Math.round(words / minutes);
  
  // Calculate words typed (split by spaces and filter empty strings)
  const wordsTypedArray = userTyped.trim().split(/\s+/).filter(word => word.length > 0);
  const totalWordsTyped = wordsTypedArray.length;
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className="flex flex-col items-center justify-center min-h-screen w-full gap-8"
    >
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Results
      </motion.div>
      
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-2xl font-semibold text-white bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500 px-8 py-4 rounded-lg"
      >
        ✓ Accuracy: {accuracy}%
      </motion.div>
      
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1 }}
        className="text-2xl font-semibold text-white bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 px-8 py-4 rounded-lg"
      >
        ⚡ WPM: {wpm}
      </motion.div>
      
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.25 }}
        className="text-2xl font-semibold text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500 px-8 py-4 rounded-lg"
      >
        📝 Words: {totalWordsTyped}
      </motion.div>
      
      <motion.button
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.5 }}
        onClick={onRetry}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 active:from-cyan-600 active:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Try Again
      </motion.button>
    </motion.div>
  );
};

export default Results;