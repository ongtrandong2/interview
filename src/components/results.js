import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GaugeChart from 'react-gauge-chart';
import { toPng } from 'html-to-image'; // Corrected import
import { useNavigate } from 'react-router-dom';
import data from '../data/assessment.json';
import './styles.css'; // Custom CSS file for additional styles

const resultsData = data.results;

const Results = () => {
  const score = useSelector((state) => state.quiz.score);
  const navigate = useNavigate();
  const scorePercentage = score / 10; // Assuming score is out of 10 for the gauge chart
  const [imageUrl, setImageUrl] = useState(null);
  const resultRef = useRef(null);

  const calculateLevel = (score) => {
    return resultsData.find(result => score >= result.range[0] && score < result.range[1]);
  };

  const currentLevelData = calculateLevel(score);

  const handleShareClick = async () => {
    if (resultRef.current) {
      try {
        const dataUrl = await toPng(resultRef.current); // Use toPng directly
        setImageUrl(dataUrl);
        navigate('/share-results', { state: { imageUrl: dataUrl } });
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center main-container">
      <Container className="container-box text-center">
        <Card ref={resultRef} className="p-4" style={{ backgroundColor: '#0f2a4d', color: 'white', borderRadius: '10px' }}>
          <h2>Voice of the Customer - Level {currentLevelData.level}</h2>
          <div className='row-xl-12'>
            <img className='col-xl-3' src={currentLevelData.icon} alt={`Level ${currentLevelData.level} icon`} style={{ width: '50px', height: '50px' }} />
            <span className='col-xl-4'>{currentLevelData.name}</span>
          </div>
          <p>{currentLevelData.description.text}</p>
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={10}
            percent={scorePercentage}
            colors={['#FF5F6D', '#FFC371']}
            arcWidth={0.3}
          />
          <Button onClick={handleShareClick} variant="primary">Share Results</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Results;
