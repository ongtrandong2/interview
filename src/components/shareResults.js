import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image'; // Import toPng from html-to-image
import './styles.css'; // Custom CSS file for additional styles

const ShareResults = () => {
  const score = useSelector((state) => state.quiz.score);
  const resultsData = useSelector((state) => state.resultsData || []);
  const scorePercentage = score / 10;

  const calculateLevel = (score) => {
    const level = resultsData.find(result => score >= result.range[0] && score < result.range[1]);
    return level || {};
  };

  const currentLevelData = calculateLevel(score);
  const shareUrl = `${window.location.origin}/results`;
  const title = `I achieved ${currentLevelData.name} level in the Voice of the Customer assessment!`;

  const location = useLocation(); // Get location from react-router-dom
  const imageUrl = location.state && location.state.imageUrl; // Retrieve imageUrl from location state
  console.log('Image URL:', imageUrl);
  // Function to handle click on Facebook share button
  const handleFacebookShare = async () => {
    try {
      const dataUrl = await toPng(document.getElementById('result-card')); // Capture the Card element
      console.log('Data URL:', dataUrl);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}&picture=${encodeURIComponent(dataUrl)}`, '_blank');
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center main-container">
      <Container className="container-box text-center">
        <Card id="result-card" className="p-4" style={{ backgroundColor: '#0f2a4d', color: 'white', borderRadius: '10px' }}>
          <h2>Share Your Results</h2>
          <p>Level: {currentLevelData.name}</p>
          <FacebookShareButton url={shareUrl} quote={title} className="my-3" onClick={handleFacebookShare}>
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
