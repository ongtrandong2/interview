import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './styles.css'; // Custom CSS file for additional styles

const ShareResults = ({ location }) => {
  const score = useSelector((state) => state.quiz.score);
  const resultsData = useSelector((state) => state.resultsData); // Assuming resultsData is stored in Redux
  const scorePercentage = score / 10; // Assuming score is out of 10 for the gauge chart

  const calculateLevel = (score) => {
    return resultsData.find(result => score >= result.range[0] && score < result.range[1]);
  };

  const currentLevelData = calculateLevel(score);
  const shareUrl = `${window.location.origin}/results`;
  const title = `I achieved ${currentLevelData.name} level in the Voice of the Customer assessment!`;

  // Extract imageUrl from location state
  const imageUrl = location.state && location.state.imageUrl;

  return (
    <div className="d-flex justify-content-center align-items-center main-container">
      <Container className="container-box text-center">
        <Card className="p-4" style={{ backgroundColor: '#0f2a4d', color: 'white', borderRadius: '10px' }}>
          <h2>Share Your Results</h2>
          <p>Level: {currentLevelData.name}</p>
          {imageUrl && (
            <img src={imageUrl} alt="Result" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          )}
          <FacebookShareButton url={shareUrl} quote={title} className="my-3">
            <FacebookIcon size={36} />
            <span className="ml-2">Share on Facebook</span>
          </FacebookShareButton>
          <Button variant="secondary" onClick={() => window.history.back()} className="mt-3">
            Back to Results
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default ShareResults;
