import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="inline-block w-[190px] rounded-md border border-highlight">
      <AnimatePresence mode="wait">
        <motion.span
          className="font-black"
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
