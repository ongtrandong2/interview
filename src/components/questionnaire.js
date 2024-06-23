// src/components/Questionnaire.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setResponse } from '../Storage/redux/quizSlice';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/assessment.json';
import './styles.css';

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = data.questions;

  const handleResponseChange = (questionId, response, scoreChange) => {
    dispatch(setResponse({ questionId, response, scoreChange }));
  };

  const handleNext = (questionId, response, scoreChange) => {
    handleResponseChange(questionId, response, scoreChange);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results');
    }
  };

  const handleYes = (questionId, response) => {
    handleNext(questionId, response, 1);
  };

  const handleNo = (questionId, response) => {
    handleNext(questionId, response, 0.5);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="container-box text-center">
        {questions.length > 0 && (
          <Card className="p-4">
            <h3>{`Câu hỏi ${currentQuestionIndex + 1}/${questions.length}`}</h3>
            <p>{questions[currentQuestionIndex].title}</p>
            {questions[currentQuestionIndex].options.map((option) => (
              <Button
                key={option.id}
                variant="outline-primary"
                className="my-2 w-100"
                onClick={() => {
                  if (option.text === 'Có') {
                    handleYes(questions[currentQuestionIndex].id, option.text);
                  } else if (option.text === 'Không') {
                    handleNo(questions[currentQuestionIndex].id, option.text);
                  } else if (option.text === 'Không rõ về vấn đề này') {
                    handleResponseChange(questions[currentQuestionIndex].id, option.text, 0);
                  }
                  else {
                    handleResponseChange(questions[currentQuestionIndex].id, option.text, 0);
                  }
                }}
              >
                {option.text}
              </Button>
            ))}
            <div className="d-flex justify-content-between mt-4">
              {currentQuestionIndex > 0 && (
                <Button variant="secondary" onClick={handleBack}>
                  Quay lại
                </Button>
              )}
              <Button
                onClick={() =>
                  handleNext(
                    questions[currentQuestionIndex].id,
                    'No response',
                    0
                  )
                }
              >
                {currentQuestionIndex < questions.length - 1 ? 'Tiếp theo' : 'Kết thúc'}
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Questionnaire;
