import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import GaugeChart from 'react-gauge-chart';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import data from '../data/assessment.json';


const resultsData = data.results;
const Results = () => {
  const score = useSelector((state) => state.quiz.score);
  const navigate = useNavigate();
  const scorePercentage = score / 10; // Assuming score is out of 10 for the gauge chart

  // Calculate level based on score using the range from resultsData
  const calculateLevel = (score) => {
    return resultsData.find(result => score >= result.range[0] && score < result.range[1]);
  };

  const currentLevelData = calculateLevel(score);

  return (
    <div className="d-flex justify-content-center align-items-center main-container " >
      <Container className="container-box text-center">
        <Card className="p-4" style={{ backgroundColor: '#0f2a4d', color: 'white', borderRadius: '10px' }}>
          <h2>Voice of the Customer - Level {currentLevelData.level}</h2>
          <div className='row-xl-12'>
            <img className='col-xl-3'src={currentLevelData.icon} alt={`Level ${currentLevelData.level} icon`} style={{ width: '50px', height: '50px' }} />
            <text className='col-xl-4 '>{currentLevelData.name}</text>
          </div>
          {/* <h4 className="mt-3">Score: {score}</h4> */}
          <p>{currentLevelData.description.text}</p>
          {/* {currentLevelData.key_actions.map((action, index) => (
            <p key={index}>{action.text}</p>
          ))} */}
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={10}
            percent={scorePercentage}
            colors={['#FF5F6D', '#FFC371']}
            arcWidth={0.3}
          />
          <Button onClick={() => navigate('/share-results')} variant="primary">Share Results</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Results;
