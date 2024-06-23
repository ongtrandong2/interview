import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image'; // Import toPng from html-to-image
import './styles.css'; // Custom CSS file for additional styles
import data from '../data/assessment.json';
const ShareResults = () => {
  const score = useSelector((state) => state.quiz.score);
  const resultsData = data.results;
  const scorePercentage = score / 10;

  const calculateLevel = (score) => {
    const level = resultsData.find(result => score >= result.range[0] && score < result.range[1]);
    return level || {};
  };

  const currentLevelData = calculateLevel(score);
  const shareUrl = `${window.location.origin}/share-results`;
  const title = `I achieved ${currentLevelData.name} level in the Voice of the Customer assessment!`;

  // Retrieve imageUrl from localStorage
  const imageUrl = localStorage.getItem('imageUrl');

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
