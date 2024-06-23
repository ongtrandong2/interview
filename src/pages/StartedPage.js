import React, { useState } from 'react';
import EmailInput from '../components/emailInput';
import "./styles.css";
const StartedPage = () => {

  return (
    <div className="background-gradient d-flex justify-content-center align-items-center">
      <div className='row-xl-12'>
        <h1 className='text-light mb-5'>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h1>
        <div className='justify-content-center'>
        <EmailInput />
        </div>
      </div>
    </div>
  );
};

export default StartedPage;
