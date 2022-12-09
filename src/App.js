import React, { useState } from 'react';
import Question from './Questions';
import { motion } from "framer-motion"
import { K_true } from './ImagesQuestions';
import { K_false } from './ImagesQuestions';
import { questions } from './ImagesQuestions';



function RandomPopup(props) {
  const { answerState } = props;
  return (
    <div>
      {answerState !== 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: "fixed" }}>
          <motion.img
            src={answerState === 1 ? K_true[Math.floor(Math.random() * K_true.length)] : K_false[Math.floor(Math.random() * K_false.length)]}
            alt="tet"
            initial={{ y: 0 }}
            animate={{ y: "-10vh", x: "20vw", position: "fixed" }}
            transition={{ duration: 0.5, when: "afterChildren" }}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            duration={100}
          />
        </motion.div>
      )}
    </div>
  );
}


export default function App() {

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState(0); // 0 = no answer, 1 = correct, 2 = incorrect


  return (
    <>
      <RandomPopup answerState={answerState} />
      <div className='app' style={answerState === 2 ? { backgroundColor: "red" } : answerState === 1 ? { backgroundColor: "green" } : {}}>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <Question setShowScore={setShowScore} setScore={setScore} setAnswerState={setAnswerState} answerState={answerState} />
        )}
      </div>
    </>
  );
}
