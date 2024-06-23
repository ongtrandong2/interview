import React, { useState } from 'react';
import Instructions from '../components/instructions';
import "./styles.css";
const InstructionsPage = () => {

  return (
    <div className="background-gradient d-flex justify-content-center align-items-center">
      <div className='row-xl-12'>
        <h1 className='text-light mb-5'>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h1>
        <div className='justify-content-center'>
        <Instructions />
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
