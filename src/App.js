import React, { useState } from 'react';
import Question from './Questions';
import { motion } from "framer-motion"



function RandomPopup(props) {
  const { showPopup } = props;
  const locations = ["top", "bottom", "left", "right"];
  const popupLocation = locations[Math.floor(Math.random() * locations.length)]

  return (
    <div>
      {showPopup && (
        <motion.div
          initial={{
            [popupLocation]: "-100%",
          }}
          animate={{
            [popupLocation]: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          style={{
            position: "fixed",
            [popupLocation]: 0,
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        >
          <img src="https://via.placeholder.com/150" alt="popup image" />
        </motion.div>
      )}
    </div>
  );
}


export default function App() {

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);


  return (
    <>
      <RandomPopup showPopup={showPopup} />
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {5}
          </div>
        ) : (
          <Question setShowScore={setShowScore} setScore={setScore} setShowPopup={setShowPopup} showPopup={showPopup} />
        )}
      </div>
    </>
  );
}
