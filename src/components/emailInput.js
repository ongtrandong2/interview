import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save email to state or context
    navigate('/instructions');
  };

  return (
    <div className="d-flex justify-content-center align-items-center main-container">
      <Container className="container-box text-center">
        <h1 className="text-light">Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?</h1>
        <p className="text-light">Đánh giá khả năng của bạn trong việc lắng nghe, nắm và đáp ứng tín hiệu từ khách hàng.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-light" >Địa chỉ email của bạn</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Bắt đầu
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EmailInput;