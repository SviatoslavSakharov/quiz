import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import { questions } from './ImagesQuestions';





function Question(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { answerState, setAnswerState } = props;


    const { setShowState, setScore } = props;


    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setAnswerState(1);
            setShowState("question");
            setTimeout(() => {
                setAnswerState(0)
                setScore(prevState => prevState + 1);
                const nextQuestion = currentQuestion + 1;
                if (nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
                } else {
                    setShowState("score");
                }
            }, 2500)
        }
        else {
            setAnswerState(2)
            setTimeout(() => {
                setAnswerState(0)
            }, 2500)
        }

    };
    return (
        <>
            <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                        <span style={{ fontSize: "25px" }}>Question {currentQuestion + 1}/{questions.length}</span>
                    </div>
                </Grid >
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 300 }}
                        style={answerState === 2 ? { backgroundColor: "red", marginBottom: "20px" } :
                            answerState === 1 ? { backgroundColor: "green", marginBottom: "20px" } :
                                { backgroundColor: "#252d4a", marginBottom: "20px" }}>
                        <CardContent>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </CardContent>
                        <CardMedia
                            component="img"
                            alt="test"
                            height="100%"
                            image={questions[currentQuestion].questionUrl}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <div style={{ marginTop: "" }}>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
                                style={answerState === 2 ? { backgroundColor: "red" } : answerState === 1 ? { backgroundColor: "green" } : {}}>
                                <div >{answerOption.answerText}</div>
                            </button>
                        ))}
                    </div>
                </Grid>
            </Grid >
        </>
    );


}

export default Question;