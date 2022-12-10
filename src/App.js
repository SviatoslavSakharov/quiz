import React, { useState } from 'react';
import Question from './Questions';
import { motion } from "framer-motion"
import { K_true } from './ImagesQuestions';
import { K_false } from './ImagesQuestions';
import { questions } from './ImagesQuestions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



function RandomPopup(props) {
  const { answerState } = props;
  return (
    <>
      {answerState !== 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.img
            src={answerState === 1 ? K_true[Math.floor(Math.random() * K_true.length)] : K_false[Math.floor(Math.random() * K_false.length)]}
            alt="tet"
            transition={{ duration: 0.5, when: "afterChildren" }}
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
      )}
    </>
  );
}


export default function App() {

  const [showState, setShowState] = useState("start");
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState(0); // 0 = no answer, 1 = correct, 2 = incorrect

  return (
    <>
      <div className='app' style={answerState === 2 ? { backgroundColor: "red" } : answerState === 1 ? { backgroundColor: "green" } : {}}>
        <RandomPopup answerState={answerState} />
        {showState === "score" ? (
          <Grid marginTop={""} container alignItems="center" alignContent="center" spacing={3}>
            <Grid item xs={12} textAlign="center" style={{ fontSize: "20px" }}>Du hast {score} von {questions.length} Fragen richtig beantwortet!</Grid>
            <Grid item xs={12} textAlign="center" style={{ fontSize: "20px" }}>Wow! Was für ein Ergebnis!</Grid>
            <Grid item xs={12} textAlign="center" style={{ fontSize: "20px" }}>{"Es ist aber nicht sehr kompliziert wenn du mehrere Versuche für jede Frage hast, oder? :))))"} </Grid>
            <Grid item xs={12} textAlign="center">
              <Button href='https://www.paypal.com/de/home' variant="contained" color="primary" target={"_blank"}>
                Click hier für dein Geschenk!
              </Button>
            </Grid>
          </Grid>
        ) : showState === "question" ?
          (
            <Question setShowState={setShowState} setScore={setScore} setAnswerState={setAnswerState} answerState={answerState} />
          ) :
          (
            <Grid marginTop={""} container alignItems="center" alignContent="center" spacing={2}>
              <Grid item xs={12} textAlign="center">Hallo Kosta!</Grid>
              <Grid item xs={12} textAlign="center">
                Das ist ein sehr wichtiger Quiz! Du kriegst dein Geschenk nur dann, wenn du alle Fragen richtig beantwortest. Sei vorsichtig und hochkonzentriert!
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button onClick={() => setShowState("question")} style={{ marginTop: "5%", backgroundColor: "green", maxWidth: "90%" }}>
                  <span color='white'>Start Quiz</span>
                </Button>
              </Grid>
            </Grid>
          )
        }
      </div>
    </>
  );
}
