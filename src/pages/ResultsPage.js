import React, { useState } from 'react';
import Results from '../components/results';
import "./styles.css";
const ResultsPage = () => {

    return (
        <div className="background-gradient d-flex justify-content-center align-items-center" >
          <div className='row-xl-12'>
            <h1 className='text-light mb-5'>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h1>
            <div className='justify-content-center'>
                <Results />
            </div>
          </div>
        </div>
      );
    };

export default ResultsPage;
