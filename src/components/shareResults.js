import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Helmet } from 'react-helmet';
import './styles.css'; // Custom CSS file for additional styles

const ShareResults = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {};
  const shareUrl = window.location.href;
  const title = 'Check out my results in the Voice of the Customer assessment!';

  return (
    <div className="d-flex justify-content-center align-items-center main-container">
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container className="container-box text-center">
        <Card className="p-4" style={{ backgroundColor: '#0f2a4d', color: 'white', borderRadius: '10px' }}>
          <h2>Share Your Results</h2>
          <p>Your results are ready to be shared!</p>
          {imageUrl && <img src={imageUrl} alt="Result" style={{ width: '100%', height: 'auto' }} />}
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
