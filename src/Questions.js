import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import franceUrl from './/img/France.jpg'
import { CardContent } from '@mui/material';




const questions = [
    {
        questionText: 'What is the capital of France?',
        questionUrl: franceUrl,
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];





function Question(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { setShowPopup, showPopup } = props;
    const { clickedAnswer, setClickedAnswer } = useState("");

    const { setShowScore, setScore } = props;


    const handleAnswerOptionClick = (isCorrect, answerText) => {
        if (isCorrect) {
            setScore(prevState => prevState + 1);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }
        else {
            setShowPopup(true)
            setTimeout(() => {
                setShowPopup(false)
            }, 1000)
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
                    <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: "#252d4a", marginBottom: "20px" }}>
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
                                style={showPopup ? { backgroundColor: "red" } : {}}>
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